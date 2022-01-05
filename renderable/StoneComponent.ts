import Vector from "../helper/Vector";
import Shape from "./shape/Shape";
import GameComponent from "./GameComponent"
import RenderingInfo from "./Entity/RenderingInfo";
import GameBoardLayout from "./layout/GameBoardLayout";
import StoneEntity from "./Entity/StoneEntity"
export default class StoneComponent extends GameComponent {

  private winJudgment: number;
  private stoneEntity: StoneEntity;

  constructor(renderingInfo: RenderingInfo) {
    super(
      renderingInfo,
      new GameBoardLayout(renderingInfo),
      new StoneEntity(renderingInfo));
    this.stoneEntity = this.entity as StoneEntity;
    this.reset();
  }

  updateWinJudgment() {
    let t: number;
    const stones = this.stoneEntity.stones;
    const compareType = this.stoneEntity.positiveType;

    function isSameType(...elms: Shape[]): number {
      if (elms.length == 0 || elms[0] === null) {
        return -1;
      }
      let cur = elms[0] instanceof compareType;
      for (let i = 1; i < elms.length; ++i) {
        if (!elms[i]) {
          return -1;
        }
        if (cur != (elms[i] instanceof compareType)) {
          return -1;    
        }
      }
      return Number(cur);
    }
    
    for (let i = 0; i < 3; ++i) {
      if ((t = isSameType(stones[i][0], stones[i][1], stones[i][2])) != -1 || 
        (t = isSameType(stones[0][i], stones[1][i], stones[2][i])) != -1){
          this.winJudgment = t;
          return ;
        }
    }

    if((t = isSameType(stones[0][0], stones[1][1], stones[2][2])) != -1 || 
    (t = isSameType(stones[0][2], stones[1][1], stones[2][0])) != -1){
      this.winJudgment = t;
      return;
    }
    //무승부 확인
    for(let i=0; i<3; ++i){
      for(let j=0; j<3; ++j){
        if (stones[i][j] === null){
          return;
        }
      }
    }

    this.winJudgment = 2;
  }

  /*
    -1: 승패가 나지 않음
    0: nagative type 승
    1: pisitive type 승
    2: 무승부
  */
  getWinJudgment(){
    return this.winJudgment;
  }

  update(): void {
    super.update();
    this.updateWinJudgment();
  }

  setMouseEvent = (e: MouseEvent) => {
    this.stoneEntity.getMousePosition(new Vector(e.clientX, e.clientY));
  }

  reset() {
    this.winJudgment = -1;
    super.reset();
  }
}