//RGB colors list
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent= pickedColor;

for(var i = 0; i < squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to square
    squares[i].addEventListener("click", function(){
        //grab color of clicked sqaure
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            //function call changeColors
            changeColors(clickedColor);
        }else {
           this.style.backgroundColor ="#232323";
           messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


//function pickColor

function pickColor(){
    //random color 0- 1
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

