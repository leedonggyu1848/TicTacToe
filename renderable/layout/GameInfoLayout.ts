import DrawHelper from "../../helper/DrawHelper";
import Vector from "../../helper/Vector";
import Layout from "./Layout"

export default class GameInfo extends Layout{

  constructor(start: Vector, end: Vector){
    super(start, end);
  }

  update(): void {
  }

  render(context: CanvasRenderingContext2D): void {
    DrawHelper.rect(context, this.startPosition, this.endPosition);
  }
}