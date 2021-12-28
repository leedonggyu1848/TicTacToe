import DrawHelper from "../../helper/DrawHelper";
import Shape from "./Shape";
import Vector from "../../helper/Vector";

export default class Circle extends Shape{
    radius: number

    constructor(pos: Vector, radius?: number){
        super(pos);
        this.radius = radius || 100
    }

    update() {

    }
    
    render(context: CanvasRenderingContext2D) {
        DrawHelper.circle(context, this.pos, this.radius);
    }
}