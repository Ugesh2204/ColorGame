//RGB colors list
var colors = generateRandomColors(6);



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent= pickedColor;
var h1 = document.querySelector("h1");

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
            h1.style.background = clickedColor;
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

//function generate ramdom 

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
     for(var i = 0; i < num; i++){
      //get random color and push into array
      arr.push(randomColor());
     }
    //return that array
    return arr;

}


function randomColor(){

    //pixk a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b +")";
}

