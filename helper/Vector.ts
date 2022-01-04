//all methods are pure function
export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  static minus(v1: Vector, v2: Vector){
    return new Vector(v1.x-v2.x, v1.y-v2.y);
  }
  
  static plus(v1: Vector, v2: Vector){
    return new Vector(v1.x+v2.x, v1.y+v2.y);
  }
  
  minus(v: Vector) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  plus(v: Vector) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  mul(n: number) {
    return new Vector(this.x * n, this.y * n);
  }

  div(n: number){
    return new Vector(this.x/n, this.y/n);
  }
}