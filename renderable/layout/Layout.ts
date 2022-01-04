import RenderingInfo from "../Entity/RenderingInfo";
import Renderable from "../Renderable";

export default abstract class Layout implements Renderable{  
  renderingInfo: RenderingInfo;
  constructor(renderingInfo: RenderingInfo){
    this.renderingInfo = renderingInfo;
  }
  update(): void {}
  abstract render(context: CanvasRenderingContext2D): void;
  reset(): void {}
}