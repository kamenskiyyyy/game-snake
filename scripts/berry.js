import Config from "./config";
import {getRandomInt} from "./supportFunction";

export default class Berry {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;

        this.config = new Config();
        this.randomPosition();
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "#d4070d";
        context.arc( this.x + (this.config.sizeCell / 2 ), this.y + (this.config.sizeCell / 2 ), this.config.sizeBerry, 0, 2 * Math.PI );
        context.fill();
    }

    randomPosition() {
        this.x = getRandomInt( 0, this.canvas.width / this.config.sizeCell ) * this.config.sizeCell;
        this.y = getRandomInt( 0, this.canvas.height / this.config.sizeCell ) * this.config.sizeCell;
    }
}