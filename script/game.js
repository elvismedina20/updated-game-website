import { Player } from './Player.js';
import { Ball } from './Ball.js';

const playerEl = document.getElementById('player');
const opponentEl = document.getElementById('opponent');
const ballEl = document.getElementById('ball');
const scoreEl = document.getElementById('score');

const player = new Player(playerEl, 'left', 600);
const opponent = new Player(opponentEl, 'right', 600);
const ball = new Ball(ballEl);

let keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function update() {
  if (keys['ArrowUp']) player.move(-player.speed);
  if (keys['ArrowDown']) player.move(player.speed);

  ball.update();

  // Basic AI for opponent
  if (opponent.getCenterY() < ball.y) opponent.move(opponent.speed);
  else if (opponent.getCenterY() > ball.y) opponent.move(-opponent.speed);

  requestAnimationFrame(update);
}

update();
