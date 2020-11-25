class Pawn extends Piece {
    constructor(x, y, color, img) {
        super(x, y, color, img)
    }

    canMove(x, y, piece) {
        if(
            this.color == "white" 
            && (y == this.y-1  || y == this.y-2)
            && this.hasMoved == false
            && x == this.x
            && !(piece instanceof Piece)
            ) return true;

            if(
                this.color == "black" 
                && (y == this.y+1  || y == this.y+2)
                && this.hasMoved == false
                && x == this.x
                && !(piece instanceof Piece)
                ) return true;

        if(
            this.color == "white" 
            && y == this.y-1 
            && x == this.x
            && !(piece instanceof Piece)
            ) return true;

            
        if(
            this.color == "black" 
            && y == this.y+1 
            && x == this.x
            && !(piece instanceof Piece)
            ) return true;


        if(this.canEat(x, y, piece)) return true;

        return false;
    }

    canEat(x, y, piece) {
        if(
            this.color == "white" 
            && (piece instanceof Piece)
            && piece.getColor() == "black"
            && y == this.y-1 
            && (x == this.x-1 || x == this.x+1)
        ) return true;

        if(
            this.color == "black" 
            && (piece instanceof Piece)
            && piece.getColor() == "white"
            && y == this.y+1 
            && (x == this.x-1 || x == this.x+1)
        ) return true;
        return false;
    }
}