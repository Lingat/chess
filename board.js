var board = document.getElementById("board");
for(var i = 0; i < 8; i++) {
    var row = board.insertRow(i);
    for(var j = 0; j < 8; j++) {
        squareNum = (i*8)+j+1;
        var square = row.insertCell(j);
        square.id = "square"+squareNum;
        if((i+j) % 2 == 0) document.getElementById("square"+squareNum).style.backgroundColor = "black";
        else square.style.backgroundColor("white");
    }

}
