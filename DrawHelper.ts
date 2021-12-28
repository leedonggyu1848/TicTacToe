import Vector from "./Vector";

export default class DrawHelper {
    static instance: DrawHelper = new DrawHelper();
    lineWidth: number = 5;


    constructor() {
        if (!DrawHelper.instance)
            DrawHelper.instance = this;
    }

    static line(ctx: CanvasRenderingContext2D, start: Vector, end: Vector){
        console.log(start, end);
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.lineWidth = DrawHelper.instance.lineWidth;
        ctx.stroke();
    }

    static rect(ctx: CanvasRenderingContext2D, start: Vector, end: Vector){
        console.log(start, end);
        ctx.rect(start.x, start.y, end.x-start.x, end.y-start.y);
        ctx.lineWidth = DrawHelper.instance.lineWidth;
        ctx.stroke();
    }
}