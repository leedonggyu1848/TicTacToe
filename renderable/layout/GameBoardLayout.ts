import DrawHelper from "../../helper/DrawHelper";
import Vector from "../../helper/Vector";
import Layout from "./Layout";

export default class Outline extends Layout {
    constructor(start: Vector, end: Vector) {
       super(start, end);
    }

    update = () => {
        
    }

    render = (context: CanvasRenderingContext2D) => {
        DrawHelper.rect(context, this.startPosition, this.endPosition);
        for(let i=1; i<3; ++i){
            DrawHelper.line(context,new Vector(this.startPosition.x, this.startPosition.y + i * (this.height/3)),
                new Vector(this.endPosition.x, this.startPosition.y + i * (this.height/3)));
            DrawHelper.line(context, new Vector(this.startPosition.x + i*(this.width/3), this.startPosition.y), 
                new Vector(this.startPosition.x + i*(this.width/3), this.endPosition.y));
        }
    }
}