import GameManager from "./renderable/GameManager";

export default class App {
    gameManager: GameManager;

    $ref: HTMLElement;
    $canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    handleRequestFrame: number | null = null;

    width: number;
    height: number;

    constructor($ref:HTMLElement, height:number, width?:number){
        if (!width){
            width = height;
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

    play() {
        this.handleRequestFrame = window.requestAnimationFrame(this.onEnterFrame);
    }
    
    onEnterFrame = () => {
        this.gameManager.update();
        this.gameManager.render(this.context);
    }
}