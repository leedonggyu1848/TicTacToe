import DrawHelper from "../../helper/DrawHelper";
import Layout from "./Layout"
import RenderingInfo from "../Entity/RenderingInfo";

export default class GameScoreLayout extends Layout{

  constructor(renderingInfo: RenderingInfo){
    super(renderingInfo);
  }

  render(context: CanvasRenderingContext2D): void {
    DrawHelper.rect(context, this.renderingInfo.start, this.renderingInfo.end);
  }
}