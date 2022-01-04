import RenderingInfo from "./Entity/RenderingInfo";
import GameComponent from "./GameComponent";
import GameScoreLayout from "./layout/GameScoreLayout"
import InfoEntity from "./Entity/ScoreEntity";
export default class ScoreComponent extends GameComponent{
  constructor(renderingInfo: RenderingInfo){
    super(
      renderingInfo,
      new GameScoreLayout(renderingInfo),
      new InfoEntity(renderingInfo)
    );
  }
}