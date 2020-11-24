class Controller {
   
    constructor() {
        this.gameBoard = new Board(8, 8); 
        this.gameBoard.init();

    }

    createBoard() {
        var htmlBoard = document.getElementById("board");
    
        for(var i = 0; i < this.gameBoard.getHeight(); i++) {
            var row = htmlBoard.insertRow(i);
            for(var j = 0; j < this.gameBoard.getWidth(); j++) {
                var squareNum = (i*8)+j+1;
                var square = row.insertCell(j);
                square.id = "square"+squareNum;
                square.className = "square";
                var elem = document.getElementById("square"+squareNum);
                if((i+j) % 2 != 0) elem.style.backgroundColor = "grey";
                this.drawPiece(j, i, elem);
                //selem.append("<div></div>");

            }   
        }
    }

    drawPiece(x, y, elem) {
        var piece = this.gameBoard.getSquare(x, y);
        if(piece != "")
            try { 
                elem.style.backgroundImage = "url('pieces/" + piece + ".png')";
            }
            catch {
           
            }
        else 
            elem.style.backgroundImage = "";
        
    }
}