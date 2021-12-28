export default interface Renderable{
    update(): void
    render(context: CanvasRenderingContext2D):void
}