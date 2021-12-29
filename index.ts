import App from "./App";

window.addEventListener('load', () => {
  const game = new App(document.body, window.innerHeight / 2);
  game.play();
})