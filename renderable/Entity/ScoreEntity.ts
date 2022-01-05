import DrawHelper from "../../helper/DrawHelper";
import Vector from "../../helper/Vector";
import Entity from "./Entity";
import RenderingInfo from "./RenderingInfo";

export default class ScoreEntity extends Entity{
  winJudgment: number;
  positiveWinCounter: number;
  negativeWinCounter: number;

  constructor(renderingInfo: RenderingInfo){
    super(renderingInfo);
    this.reset();
  }
  update(): void {
    if (this.winJudgment !== null){
      if (this.winJudgment !== 2){
        if (this.winJudgment === 0){
          this.negativeWinCounter++;
        } else {
          this.positiveWinCounter++;
        }
      }
      this.winJudgment = null;
    }
  }
  render(context: CanvasRenderingContext2D): void {
    const pos = Vector.plus(this.renderingInfo.end, this.renderingInfo.start).div(2);
    const text = `${this.negativeWinCounter} : ${this.positiveWinCounter}`;
    DrawHelper.text(context, pos, text, this.renderingInfo.getHeight() * 0.2);
  }

  reset(): void {
    this.winJudgment = null;
    this.positiveWinCounter = 0;
    this.negativeWinCounter = 0;
  }
  
  setWinJudgment(n: number){
    this.winJudgment = n;
  }
}