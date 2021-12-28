import DrawHelper from "../helper/DrawHelper";
import Renderable from "./Renderable";
import Vector from "../helper/Vector";

export default class Outline implements Renderable {
    start: Vector;
    end: Vector;
    height: number;
    width: number;
    
    constructor(start: Vector, end: Vector) {
        this.start = start;
        this.end = end;
        this.height = end.y - start.y;
        this.width = end.x - start.x;
    }

    update = () => {
        
    }

    render = (context: CanvasRenderingContext2D) => {
        DrawHelper.rect(context, this.start, this.end);
        for(let i=1; i<3; ++i){
            DrawHelper.line(context,new Vector(this.start.x, this.start.y + i * (this.height/3)),
                new Vector(this.end.x, this.start.y + i * (this.height/3)));
            DrawHelper.line(context, new Vector(this.start.x + i*(this.width/3), this.start.y), 
                new Vector(this.start.x + i*(this.width/3), this.end.y));
        }
    }
}