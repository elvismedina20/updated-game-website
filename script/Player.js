export class Player {
  constructor(element, side, gameHeight) {
    this.el = element;
    this.side = side;
    this.height = 80;
    this.width = 15;
    this.y = (gameHeight - this.height) / 2;
    this.speed = 6;
  }

  updateVisual() {
    this.el.style.top = `${this.y}px`;
  }

  move(dy) {
    this.y += dy;
    this.y = Math.max(0, Math.min(this.y, 600 - this.height)); // Clamp to game height
    this.updateVisual();
  }

  getCenterY() {
    return this.y + this.height / 2;
  }
}
