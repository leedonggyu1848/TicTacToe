import Vector from "../helper/Vector";
import Renderable from "./Renderable";
import Shape from "./shape/Shape";

export default class StoneManager implements Renderable{

    stones: Array<Array<Shape>>;
    start: Vector;
    end: Vector;

    constructor(start: Vector, end: Vector){
        this.stones = new Array(3).fill(new Array(3).fill(null));
        this.start = start;
        this.end = end;
    }

    update(): void {
        //게임 진행과 업데이트
    }

    render(context: CanvasRenderingContext2D): void {
        for(let i=0; i<3; ++i){
            for(let j=0; j<3; ++j){
                this.stones[i][j]?.render(context);
            }
        }
    }

}