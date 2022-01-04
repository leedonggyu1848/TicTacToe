import Vector from "../../helper/Vector";
import DrawHelper from "../../helper/DrawHelper";
import RenderingInfo from "../Entity/RenderingInfo";
import Layout from "./Layout";

export default class Outline extends Layout {
  constructor(renderingInfo:RenderingInfo) {
    super(renderingInfo);
  }

  render = (context: CanvasRenderingContext2D) => {
    DrawHelper.rect(context, this.renderingInfo.start, this.renderingInfo.end);
    for (let i = 1; i < 3; ++i) {
      DrawHelper.line(context, new Vector(this.renderingInfo.start.x, this.renderingInfo.start.y + i * (this.renderingInfo.getHeight() / 3)),
        new Vector(this.renderingInfo.end.x, this.renderingInfo.start.y + i * (this.renderingInfo.getHeight() / 3)));
      DrawHelper.line(context, new Vector(this.renderingInfo.start.x + i * (this.renderingInfo.getWidth() / 3), this.renderingInfo.start.y),
        new Vector(this.renderingInfo.start.x + i * (this.renderingInfo.getWidth() / 3), this.renderingInfo.end.y));
    }
  }
}