import RenderingInfo from "./Entity/RenderingInfo";
import GameComponent from "./GameComponent";
import GameScoreLayout from "./layout/GameScoreLayout"
import InfoEntity from "./Entity/ScoreEntity";
import ScoreEntity from "./Entity/ScoreEntity";
export default class ScoreComponent extends GameComponent{
  scoreEntity: ScoreEntity;
  constructor(renderingInfo: RenderingInfo){
    super(
      renderingInfo,
      new GameScoreLayout(renderingInfo),
      new InfoEntity(renderingInfo)
    );
    this.scoreEntity = this.entity as ScoreEntity;
  }

  setWinJudgment(n: number){
    this.scoreEntity.setWinJudgment(n);
  }
}