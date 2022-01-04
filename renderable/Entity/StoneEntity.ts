import Vector from "../../helper/Vector";
import RenderingInfo from "./RenderingInfo";
import Entity from "./Entity";
import Shape from "../shape/Shape";
import Circle from "../shape/Circle";
import CrossMark from "../shape/CrossMark";

export default class StoneEntity extends Entity{
  stones: Array<Array<Shape>>;
  currentPlacement: Vector;
  blockSize: Vector;
  currentTurn: boolean;
  positiveType = Circle;
  negativeType = CrossMark;

  update(): void {
    if(this.currentPlacement !== null){
      if (this.currentPlacement.x < 3 && 
          this.currentPlacement.y < 3 && 
          this.stones[this.currentPlacement.y][this.currentPlacement.x] === null){
            this.placeStone(
              new Vector(this.currentPlacement.x, this.currentPlacement.y),
              this.currentTurn
            );
            this.currentTurn = !this.currentTurn;
          }
    }
    this.currentPlacement = null
  }

  render(context: CanvasRenderingContext2D): void {
    for(let i=0; i<3; ++i){
      for(let j=0; j<3; ++j){
        if(this.stones[i][j]){
          this.stones[i][j].render(context);
        }
      }
    }
  }

  placeStone(pos: Vector, turn: boolean){
    const offset = new Vector(
      this.blockSize.x * pos.x,
      this.blockSize.y * pos.y
    );
    const start = Vector.plus(this.renderingInfo.start, offset);
    const end = Vector.plus(start, this.blockSize);
    this.stones[pos.y][pos.x] = (turn ? 
      new this.positiveType(start, end) : 
      new this.negativeType(start, end));
  }

  getMousePosition(pos: Vector){
    const x = Math.floor(pos.x / this.blockSize.x);
    const y = Math.floor(pos.y / this.blockSize.y);
    this.currentPlacement = new Vector(x, y);
  }

  reset(): void {
    this.currentPlacement = null;
    this.currentTurn = false;
    this.stones = new Array(3);
    for(let i=0; i<3; ++i){
      this.stones[i] = new Array(3).fill(null);
    }
  }

  constructor(renderingInfo: RenderingInfo){
    super(renderingInfo);
    this.blockSize = Vector.minus(this.renderingInfo.end, this.renderingInfo.start).div(3);
    this.reset();
  }
  
}