class Controller {
   
    constructor() {
        this.gameBoard = new Board(8, 8); 
        this.gameBoard.init();
        this.currentlySelectedPiece = "";
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
                
                elem.insertAdjacentHTML('beforeend', '<div style = "width: 55px; height: 55px" onclick="controller.clickSquare(' + j + ',' + i + ')"></div>');
              
            }   
        }
    }

    drawPiece(x, y, elem) {
        var piece = this.gameBoard.getSquare(x, y);
        if(piece != "")
            try { 
                elem.style.backgroundImage = "url('pieces/" + piece.getImg() + ".png')";
            }
            catch {
                elem.style.backgroundImage = "url('pieces/" + piece + ".png')";
            }
        else 
            elem.style.backgroundImage = "";
        
    }

    update() {
        this.gameBoard.update();
        for(var i = 0; i < this.gameBoard.getHeight(); i++) {
            for(var j = 0; j < this.gameBoard.getWidth(); j++) {
                var squareNum = (i*8)+j+1;
                var elem = document.getElementById("square"+squareNum);
                this.drawPiece(j, i, elem);
            }   
        }
    }

    clickSquare(x, y) {
    
        var squareNum = y*8+x+1;

        var elem = document.getElementById("square"+squareNum);
        
        if(this.currentlySelectedPiece != "") {
                this.currentlySelectedPiece.move(x, y, this.gameBoard.getSquare(x, y));
                this.currentlySelectedPiece = "";
                this.update();
                this.resetColors();


        } else {
            this.currentlySelectedPiece = this.gameBoard.getSquare(x, y);
            elem.style.backgroundColor = "red";
            console.log(this.currentlySelectedPiece);
            
        }



    }

    resetColors() {
        for(var i = 0; i < this.gameBoard.getHeight(); i++) {
            for(var j = 0; j < this.gameBoard.getWidth(); j++) {
                var squareNum = (i*8)+j+1;
                var elem = document.getElementById("square"+squareNum);
                if((i+j)%2!=0) elem.style.backgroundColor = "grey"
                else elem.style.backgroundColor = "white"
            }   
        }
    }

}