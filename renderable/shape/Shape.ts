import Renderable from "../Renderable";
import Vector from "../../helper/Vector";
import RenderingInfo from "../Entity/RenderingInfo";

export default class Shape implements Renderable {
  renderingInfo: RenderingInfo;
  constructor(start: Vector, end: Vector) {
    this.renderingInfo = new RenderingInfo(start, end);
  }

  getCenter(){
    const block = Vector.minus(this.renderingInfo.end, this.renderingInfo.start);
    return Vector.plus(block.div(2), this.renderingInfo.start);
  }

  getHeight(){
    return this.renderingInfo.getHeight();
  }

  getWidth(){
    return this.renderingInfo.getWidth();
  }

  update() {}
  render(context: CanvasRenderingContext2D) {}
}