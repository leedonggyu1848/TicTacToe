import Vector from "./Vector";

export default class DrawHelper {
    static instance: DrawHelper = new DrawHelper();
    lineWidth: number = 5;


    constructor() {
        if (!DrawHelper.instance)
            DrawHelper.instance = this;
    }

    static line(ctx: CanvasRenderingContext2D, start: Vector, end: Vector){
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.lineWidth = DrawHelper.instance.lineWidth;
        ctx.stroke();
    }

    static rect(ctx: CanvasRenderingContext2D, start: Vector, end: Vector){
        ctx.beginPath();
        ctx.rect(start.x, start.y, end.x-start.x, end.y-start.y);
        ctx.lineWidth = DrawHelper.instance.lineWidth;
        ctx.stroke();
    }

    static circle(ctx:CanvasRenderingContext2D,pos: Vector, radius: number) {
        ctx.beginPath();
        ctx.lineWidth = DrawHelper.instance.lineWidth;
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI*2);
        ctx.stroke();
    }

    static cross(ctx: CanvasRenderingContext2D, pos: Vector, radius: number){
        const basis = new Vector(radius*Math.cos(Math.PI/4), radius*Math.sin(Math.PI/4));
        const dirs = [[1,1], [-1,1], [1,-1], [-1,-1]];
        ctx.beginPath();
        ctx.lineWidth = DrawHelper.instance.lineWidth;
        for (const dir of dirs) {
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(pos.x+(basis.x*dir[0]), pos.y+(basis.y*dir[1]));
            ctx.stroke();
        }
    }
}