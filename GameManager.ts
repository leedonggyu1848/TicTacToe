import Renderable from "./Renderable";
import Vector from "./Vector";
import Outline from "./Outline";
import Circle from "./Circle";
import CrossMark from "./CrossMark";

export default class GameManager implements Renderable {
    entities: Array<Renderable>;
    private offset: number = 10;
    private start: Vector;
    private end: Vector;
    private width: number;
    private height: number;
    
    constructor(width: number, height: number) {
        this.entities = [];
        this.start = new Vector(0, 0);
        this.end = new Vector(width, height);
        this.entities.push(new Outline(this.getStart(), this.getEnd()));
        this.width = width;
        this.height = height;
        //test
        const blockSize = this.getBlockSize();
        const basis = new Vector(blockSize.x/2, blockSize.y/2);
        this.entities.push(new Circle(
            this.getStart().plus(basis),
            Math.min(blockSize.x/2, blockSize.y/2)-10
        ));
        this.entities.push(new CrossMark(
            this.getStart().plus(basis),
            Math.min(blockSize.x/2, blockSize.y/2)-10))
    }

    setOffset(offset: number) {
        this.offset = offset;
    }

    getStart(){
        return this.start.plus(new Vector(this.offset, this.offset));
    }

    getEnd(){
        return this.end.minus(new Vector(this.offset, this.offset));
    }

    getWidth(){
        return this.width - this.offset*2;
    }

    getHeight(){
        return this.height - this.offset*2;
    }

    getBlockSize(){
        return new Vector(this.getWidth()/3, this.getHeight()/3);
    }

    update = () => {
        for(let i=0; i<this.entities.length; ++i){
            this.entities[i].update();
        }
    }

    render = (context: CanvasRenderingContext2D) => {
        for(let i=0; i<this.entities.length; ++i){
            this.entities[i].render(context);
        }
    }

    addEntity(entity: Renderable){
        this.entities.push(entity);
    }

    removeEntity(entity: Renderable){
        const entityIndex = this.entities.indexOf(entity);
        if (entityIndex > -1) {
            this.entities.splice(entityIndex, 1);
        }
    }
}