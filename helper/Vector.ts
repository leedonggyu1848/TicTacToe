//all methods are pure function
export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
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
}