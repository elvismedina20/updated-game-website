export class Player {
  constructor(el, side, gameHeight) {
    this.el = el;
    this.height = 100;
    this.speed = 4;
    this.side = side;
    this.y = (gameHeight - this.height) / 2;
  }

  updateVisual() {
    this.el.style.top = `${this.y}px`;
  }

  move(dy) {
    this.y += dy;
    const max = 600 - this.height;
    this.y = Math.max(0, Math.min(this.y, max));
    this.updateVisual();
  }

  getCenterY() {
    return this.y + this.height / 2;
  }

  fire() {
    // placeholder if needed
  }
}
