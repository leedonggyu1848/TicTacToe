import Renderable from "./Renderable";
import Vector from "../helper/Vector";
import StoneComponent from "./StoneComponent";
import RenderingInfo from "./Entity/RenderingInfo";
import ScoreComponent from "./ScoreComponent";

export default class GameManager implements Renderable {
  private offset: number;
  private offsetVector: Vector;
  private scoreRenderingInfo: RenderingInfo;
  private gameRenderingInfo: RenderingInfo;
  stoneComponent: StoneComponent;
  scoreComponent: ScoreComponent;
  private width: number;
  private height: number;

  constructor(width: number, height: number, offset?: number) {
    this.offset = offset || 10;
    this.offsetVector = new Vector(this.offset, this.offset)
    this.gameRenderingInfo = new RenderingInfo(
      new Vector(0,0), new Vector(height, height)
      );

    this.scoreRenderingInfo = new RenderingInfo(
      new Vector(height, 0), new Vector(height + (width - height) / 2, height)
    );

    this.width = width;
    this.height = height;

    this.stoneComponent = new StoneComponent(this.applyOffsetTo(this.gameRenderingInfo));
    this.scoreComponent = new ScoreComponent(this.applyOffsetTo(this.scoreRenderingInfo));
  }

  applyOffsetTo(info: RenderingInfo){
    return new RenderingInfo(
      info.start.plus(this.offsetVector),
      info.end.minus(this.offsetVector)
    );
  }

  getMouseEvent = (e: MouseEvent) => {
    this.stoneComponent.setMouseEvent(e);
  }

  update = () => {
    this.stoneComponent.update();
    this.scoreComponent.update();
    const win = this.stoneComponent.getWinJudgment();
    if (win !== -1){
      this.scoreComponent.setWinJudgment(win);
      this.stoneComponent.reset();
      this.update();
    }
  }

  render = (context: CanvasRenderingContext2D) => {
    context.beginPath();
    context.fillStyle = 'rgba(255, 255, 255)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();
    this.stoneComponent.render(context);
    this.scoreComponent.render(context);
  }

  reset = () => {
    this.stoneComponent.reset();
    this.scoreComponent.reset();
  }
}