import GameManager from "./renderable/GameManager";

export default class App {
  gameManager: GameManager;


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
  }

  onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    //왼쪽 클릭
    if (e.button == 0) {
      if (e.target !== this.$canvas){
        return;
      }
      this.gameManager.getMouseEvent(e);
      this.handleRequestFrame = window.requestAnimationFrame(this.frameFunction);
    }
  }

  play() {
    window.addEventListener("mousedown", this.onMouseDown);
    this.gameManager.reset();
    this.frameFunction = this.onEnterFrame;
    this.handleRequestFrame = window.requestAnimationFrame(this.frameFunction);
  }

  pause() {
    this.frameFunction = ()=>{};
  }

  onEnterFrame = () => {
    this.gameManager.update();
    this.gameManager.render(this.context);
  }
}