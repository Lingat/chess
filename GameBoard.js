class Board {
    
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = new Array(height);

        for(var i = 0; i < this.height; i++) {
           this.board[i] = new Array(8);
        }

    }

    init() {
        for(var i = 0; i < this.height; i++) {
            for(var j = 0; j < this.width; j++) {
                this.board[i][j] = "";
             }
         }
         this.placePieces();

    }

    updatePieces() {
        for(var i = 0; i < this.height; i++) {
            for(var j = 0; j < this.width; j++) {
                if(this.board[i][j] != "") {
                    try {
            
                    var piece = this.board[i][j];
                    if(piece instanceof Pawn || piece instanceof Bishop) {
                        this.board[i][j] = "";
                        this.board[piece.y][piece.x] = piece;

                    }

                    }
                    catch {
                        
                    }
                }
          
             }
         }
    }

    update() {
       
         this.updatePieces();
    }

    placePawns() {
        for(var i = 0; i < this.width; i++) {
            this.board[6][i] = new Pawn(i, 6, "white", "WPAWN");
            this.board[1][i] = new Pawn(i, 1, "black", "BPAWN");;
        }
    }

    placeKnights() {
        this.board[0][1] = "BKNIGHT";
        this.board[7][1] = "WKNIGHT";
        this.board[0][6] = "BKNIGHT";
        this.board[7][6] = "WKNIGHT";
    }

    placeBishops() {
        this.board[0][2] = new Bishop(2, 0, "black", "BBISHOP")
        this.board[7][2] = new Bishop(2, 7, "white", "WBISHOP");
        this.board[0][5] = new Bishop(5, 0, "black", "BBISHOP");
        this.board[7][5] = new Bishop(5, 7, "white", "WBISHOP");
    }
    
    placeRooks() {
        this.board[0][0] = "BROOK";
        this.board[7][0] = "WROOK";
        this.board[0][7] = "BROOK";
        this.board[7][7] = "WROOK";
    }

    placeQueens() {
        this.board[7][3] = "WQUEEN";
        this.board[0][3] = "BQUEEN";
    }

    placeKings() {
        this.board[7][4] = "WKING";
        this.board[0][4] = "BKING";
    }

    placePieces() {
        this.placePawns();
        this.placeBishops();
        this.placeKnights();
        this.placeRooks();
        this.placeQueens();
        this.placeKings();
    }
 

    getSquare(x, y) {
        return this.board[y][x];
    }
    
    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}



