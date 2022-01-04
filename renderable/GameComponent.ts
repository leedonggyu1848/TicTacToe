import Renderable from "./Renderable";
import Entity from "./Entity/Entity";
import RenderingInfo from "./Entity/RenderingInfo";
import Layout from "./layout/Layout";
export default class GameComponent implements Renderable{
  layout: Layout;
  entity: Entity;
  renderingInfo: RenderingInfo;

  constructor(renderingInfo: RenderingInfo, layout: Layout, entity: Entity){
    this.renderingInfo = renderingInfo;
    this.layout = layout;
    this.entity = entity;
  }

  render(context: CanvasRenderingContext2D){
    this.layout.render(context);
    this.entity.render(context);
  }

  update(){
    this.layout.update();
    this.entity.update();
  }

  reset(){
    this.entity.reset();
  };
}