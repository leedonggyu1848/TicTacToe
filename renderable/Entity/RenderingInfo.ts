import Vector from "../../helper/Vector";

export default class RenderingInfo{
  start: Vector;
  end: Vector;

  constructor(start: Vector, end: Vector){
    this.start = start;
    this.end = end;
  }

  getHeight(){
    return this.end.y - this.start.y;
  }

  getWidth(){
    return this.end.x - this.start.x;
  }
}