import Renderable from "./Renderable";
import Vector from "./Vector";

export default class Shape implements Renderable{
    pos: Vector;
    constructor(pos: Vector) {
        this.pos = pos;
    }

    update() {

    }

    render(context: CanvasRenderingContext2D) {
        
    }
}