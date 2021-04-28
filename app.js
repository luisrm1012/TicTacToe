//Global Variables
const square = document.getElementsByClassName("square")
var player1 = true;
var board = []; // board[i]=1 means player 1 played in that position, board[i]=2 means player 2 played in that position

// Loop to load function on all elements with class square
for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function() {
        myFunction(this, i);
    }, false);
}

//Function

function myFunction(element, i) {
    if (player1 == true) {
        element.innerHTML = "<h1 id='x'>X<h1>"
        player1 = false;
        board[i] = 1;
        console.log(board)
    } else if (player1 == false) {
        element.innerHTML = "<h1 id='o'>O<h1>"
        player1 = true;
        board[i] = 2;
        console.log(board)
    }
}