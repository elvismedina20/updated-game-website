export class Ball {
  constructor(el) {
    this.el = el;
    this.size = 15;
    this.reset();
  }

  reset() {
    this.x = 392.5;
    this.y = 292.5;
    this.velocity = [5, 3];
    this.updateVisual();
  }

  update() {
    this.x += this.velocity[0];
    this.y += this.velocity[1];

    if (this.y <= 0 || this.y >= 600 - this.size) {
      this.velocity[1] *= -1;
    }

    this.updateVisual();
  }

  updateVisual() {
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}
