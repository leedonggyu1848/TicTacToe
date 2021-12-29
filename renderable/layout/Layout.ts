import Vector from "../../helper/Vector";
import Renderable from "../Renderable";

export default class Layout implements Renderable{
  startPosition: Vector;
  endPosition: Vector;
  height: number;
  width: number;
  
  constructor(start :Vector, end:Vector){
    this.startPosition = start;
    this.endPosition = end;
    this.height = end.y - start.y;
    this.width = end.x - start.x;
  }

  update(): void {
      
  }

  render(context: CanvasRenderingContext2D): void {
      
  }
}