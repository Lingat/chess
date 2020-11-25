class Piece {
    constructor(x, y, color, img) {
        this.x = x;
        this.y = y; 
        this.img = img;
        this.color = color;
        this.hasMoved = false;
    }

    move(x, y, piece) {

        if(this.canMove(x, y, piece)) {
            this.hasMoved = true;
            this.x = x;
            this.y = y;
        }
    }

    getImg() {
        return this.img;
    }

    getColor() {
        return this.color;
    }

    canMove(x, y) {
        return true;
    }

}