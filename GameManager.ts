import Renderable from "./Renderable";
import Vector from "./Vector";
import Outline from "./Outline";

export default class GameManager implements Renderable {
    entities: Array<Renderable>;
    private offset: number = 10;
    private start: Vector;
    private end: Vector;

    constructor(width: number, height: number) {
        this.entities = [];
        this.start = new Vector(0, 0);
        this.end = new Vector(width, height);
        this.entities.push(new Outline(this.getStart(), this.getEnd()));
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