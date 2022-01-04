import DrawHelper from "../../helper/DrawHelper";
import Shape from "./Shape";
import Vector from "../../helper/Vector";

export default class Circle extends Shape{
    radius: number

    constructor(start: Vector, end: Vector, radiusRate?: number){
        super(start, end);
        radiusRate = radiusRate || 0.4;
        this.radius = Math.min(this.getWidth(), this.getHeight()) * radiusRate;
    }
    
    render(context: CanvasRenderingContext2D) {
        DrawHelper.circle(context, this.getCenter(), this.radius);
    }
}