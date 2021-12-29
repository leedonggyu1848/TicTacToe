import Renderable from "./Renderable";
import Vector from "../helper/Vector";

export default class GameManager implements Renderable {
  entities: Array<Renderable>;

  private offset: number = 10;
  private offsetVector: Vector = new Vector(this.offset, this.offset);
  private gameStartPosition: Vector;
  private gameEndPosition: Vector;
  private infoStartPosition: Vector;
  private infoEndPosition: Vector;
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.entities = [];
    this.gameStartPosition = new Vector(0, 0);
    this.gameEndPosition = new Vector(height, height);
    this.infoStartPosition = new Vector(height, 0);
    this.infoEndPosition = new Vector(height + (width - height) / 2, height);
    this.width = width;
    this.height = height;
  }

  setOffset(offset: number) {
    this.offset = offset;
    this.offsetVector = new Vector(this.offset, this.offset);
  }

  getGameStartPosition() {
    return this.gameStartPosition.plus(this.offsetVector);
  }

  getGameEndPosition() {
    return this.gameEndPosition.minus(this.offsetVector);
  }

  getInfoStartPosition() {
    return this.infoStartPosition.plus(this.offsetVector);
  }

  getInfoEndPosition() {
    return this.infoEndPosition.minus(this.offsetVector);
  }

  update = () => {
    for (let i = 0; i < this.entities.length; ++i) {
      this.entities[i].update();
    }
  }

  render = (context: CanvasRenderingContext2D) => {
    context.beginPath();
    context.fillStyle = 'rgba(255, 255, 255)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();

    for (let i = 0; i < this.entities.length; ++i) {
      this.entities[i].render(context);
    }
  }

  addEntity(entity: Renderable) {
    this.entities.push(entity);
  }

  removeEntity(entity: Renderable) {
    const entityIndex = this.entities.indexOf(entity);
    if (entityIndex > -1) {
      this.entities.splice(entityIndex, 1);
    }
  }

  reset() {
    this.entities = [];
  }
}