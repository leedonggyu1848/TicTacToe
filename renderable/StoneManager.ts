import Vector from "../helper/Vector";
import Renderable from "./Renderable";
import Circle from "./shape/Circle";
import CrossMark from "./shape/CrossMark";
import Shape from "./shape/Shape";

export default class StoneManager implements Renderable {

  stones: Array<Array<Shape>>;
  start: Vector;
  end: Vector;
  blockSize: Vector;
  nextPlacement: Vector;
  currentTrun: boolean;
  winJudgment: number;
  positiveType = Circle;

  constructor(start: Vector, end: Vector) {
    this.start = start;
    this.end = end;
    new Vector(
      (this.end.x - this.start.x) / 3,
      (this.end.y - this.start.y) / 3);
    this.blockSize = new Vector((end.x - start.x) / 3, (end.y - start.y) / 3);
    this.reset();
  }

  updateWinJudgment() {
    const positiveType = this.positiveType;
    let t: number;

    function isSameType(...elms: Shape[]): number {
      if (elms.length == 0 || elms[0] == null) {
        return -1;
      }
      let cur = elms[0] instanceof positiveType;
      for (let i = 1; i < elms.length; ++i) {
        if (!elms[i]) {
          return -1;
        }
        if (cur != (elms[i] instanceof positiveType)) {
          return -1;
        }
      }
      return Number(cur);
    }
    for (let i = 0; i < 3; ++i) {
      if ((t = isSameType(this.stones[i][0], this.stones[i][1], this.stones[i][2])) != -1 || 
        (t = isSameType(this.stones[0][i], this.stones[1][i], this.stones[2][i])) != -1){
          this.winJudgment = t;
          return ;
        }
    }
    if((t = isSameType(this.stones[0][0], this.stones[1][1], this.stones[2][2])) != -1 || 
    (t = isSameType(this.stones[0][2], this.stones[1][1], this.stones[2][0])) != -1){
      this.winJudgment = t;
      return;
    }
    for(let i=0; i<3; ++i){
      for(let j=0; j<3; ++j){
        if (this.stones[i][j] === null){
          return;
        }
      }
    }
    this.winJudgment = 2;
  }

  update(): void {
    if (this.nextPlacement) {
      const x = Math.floor(this.nextPlacement.x / this.blockSize.x);
      const y = Math.floor(this.nextPlacement.y / this.blockSize.y);
      if (x < 3 && y < 3 && this.stones[y][x] === null) {
        this.addStone(x, y, this.currentTrun);
        this.currentTrun = !this.currentTrun;
        this.updateWinJudgment();
      }
    }
    this.nextPlacement = null;
  }

  render(context: CanvasRenderingContext2D): void {
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        if (this.stones[i][j]) {
          this.stones[i][j].render(context);
        }
      }
    }
  }

  addStone(x: number, y: number, turn: boolean) {
    const offset = new Vector(
      this.blockSize.x * x + this.blockSize.x / 2,
      this.blockSize.y * y + this.blockSize.y / 2);
    if (turn) {
      this.stones[y][x] = new Circle(
        this.start.plus(offset),
        Math.min(this.blockSize.x / 2, this.blockSize.y / 2) - 10
      );
    } else {
      this.stones[y][x] = new CrossMark(
        this.start.plus(offset),
        Math.min(this.blockSize.x / 2, this.blockSize.y / 2) - 10
      );
    }
  }

  getMouseEvent = (e: MouseEvent) => {
    this.nextPlacement = new Vector(e.clientX, e.clientY);
  }

  reset() {
    this.stones = new Array(3);
    for (let i = 0; i < 3; ++i) {
      this.stones[i] = new Array(3).fill(null);
    }
    this.currentTrun = false;
    this.winJudgment = -1;
  }
}