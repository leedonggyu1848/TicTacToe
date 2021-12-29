import GameManager from "./renderable/GameManager";
import GameBoardLayout from "./renderable/layout/GameBoardLayout";
import GameInfoLayout from "./renderable/layout/GameInfoLayout";
import StoneManager from "./renderable/StoneManager";

export default class App {
  gameManager: GameManager;
  stoneManager: StoneManager;

  $ref: HTMLElement;
  $canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  handleRequestFrame: number | null = null;

  width: number;
  height: number;

  frameFunction: FrameRequestCallback;

  constructor($ref: HTMLElement, height: number, width?: number) {
    if (!width) {
      width = height*2;
    }
    this.$ref = $ref;
    this.$canvas = document.createElement('canvas');
    this.width = width;
    this.height = height;
    this.$canvas.width = width;
    this.$canvas.height = height;
    this.context = this.$canvas.getContext('2d');
    this.$ref.appendChild(this.$canvas);

    this.gameManager = new GameManager(width, height);
    this.stoneManager = new StoneManager(
      this.gameManager.getGameStartPosition(),
      this.gameManager.getGameEndPosition());

  }

  onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    //왼쪽 클릭
    if (e.button == 0) {
      if (e.target !== this.$canvas){
        return;
      }
      this.stoneManager.getMouseEvent(e);
      this.handleRequestFrame = window.requestAnimationFrame(this.frameFunction);
    }
  }

  play() {
    window.addEventListener("mousedown", this.onMouseDown);
    this.gameManager.reset();
    this.stoneManager.reset();

    this.gameManager.addEntity(new GameBoardLayout(
      this.gameManager.getGameStartPosition(),
      this.gameManager.getGameEndPosition()
    ));
    this.gameManager.addEntity(new GameInfoLayout(
      this.gameManager.getInfoStartPosition(),
      this.gameManager.getInfoEndPosition()
    ));

    this.frameFunction = this.onEnterFrame;
    this.handleRequestFrame = window.requestAnimationFrame(this.frameFunction);
  }

  pause() {
    this.frameFunction = ()=>{};
  }

  onEnterFrame = () => {
    this.gameManager.update();
    this.stoneManager.update();

    this.gameManager.render(this.context);
    this.stoneManager.render(this.context);

    if (this.stoneManager.winJudgment != -1) {
      console.log(this.stoneManager.winJudgment);
      this.pause();
    }
  }
}