export default class Vector {
    x: number;
    y: number;

    constructor(x: number, y:number){
        this.x = x;
        this.y = y;
    }

    setX(x:number){
        this.x = x;
        return this;
    }

    setY(y:number){
        this.y = y;
        return this;
    }

    minus(v: Vector){
        return new Vector(this.x - v.x, this.y - v.y);
    }

    plus(v: Vector){
        return new Vector(this.x + v.x, this.y + v.y);
    }
}