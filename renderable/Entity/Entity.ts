import Renderable from "../Renderable";
import RenderingInfo from "./RenderingInfo";

export default abstract class Entity implements Renderable{
  renderingInfo: RenderingInfo;
  constructor(renderingInfo: RenderingInfo){
    this.renderingInfo = renderingInfo;
  }
  abstract update(): void 
  abstract render(context: CanvasRenderingContext2D): void 
  abstract reset(): void;
}