//Global Variables
const square = document.getElementsByClassName("square")
var player1 = true;
var board = [null, null, null, null, null, null, null, null, null]; // board[i]=1 means player 1 played in that position, board[i]=2 means player 2 played in that position

// Loop to load function on all elements with class square
for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function() {
        let j = this.getAttribute("value") - 1;
        myFunction(this, j);
    }, false);
}

//Function

function myFunction(element, i) {
    if (checkSquare(i) == true) {
        if (player1 == true) {
            element.innerHTML = "<h1 id='x'>X</h1>"
            player1 = false;
            board[i] = 1;
            console.log(board)
        } else if (player1 == false) {
            element.innerHTML = "<h1 id='o'>O</h1>"
            player1 = true;
            board[i] = 2;
            console.log(board)
        }
    }

}

function checkSquare(i) { //if returns true the square is available
    if (board[i] == 1 || board[i] == 2) {
        return false;
    } else return true;

}

function checkWin(n) {



}