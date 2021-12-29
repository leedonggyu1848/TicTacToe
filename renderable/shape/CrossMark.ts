import DrawHelper from "../../helper/DrawHelper";
import Shape from "./Shape";
import Vector from "../../helper/Vector";

export default class CrossMark extends Shape {
  radius: number;

  constructor(pos: Vector, radius?: number) {
    super(pos);
    this.radius = radius || 100;
  }

  update(): void {

  }

  render(context: CanvasRenderingContext2D): void {
    DrawHelper.cross(context, this.pos, this.radius);
  }

}