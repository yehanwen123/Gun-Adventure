export class Renderer {
    constructor(canvasId, width = 320, height = 180) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;

        this.ctx.imageSmoothingEnabled = false;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        if (img) {
            this.ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }
}
