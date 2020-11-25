class Bishop extends Piece {
    constructor(x, y, color, img) {
        super(x, y, color, img)
    }

    availableSpot(x, y, color) {
        return  this.color == color && 
            ((this.x - x) == (this.y-y) || 
            (this.x - x) == -(this.y-y) || 
            (this.x + x) == (this.y-y) ||
            (this.x - x) == (this.y+y) ||
            (this.x + x) == (this.y+y))

    }

    canEat(x, y, piece) {
        return this.availableSpot(x, y, this.color) && piece.getColor() != this.color;
    }

    canMove(x, y, piece) {
        if(this.availableSpot(x, y, "white") && !(piece instanceof Piece)) return true;
        if(this.availableSpot(x, y, "black") && !(piece instanceof Piece)) return true;
        if(this.canEat(x, y, piece)) return true;
        return false;
    }

  
}