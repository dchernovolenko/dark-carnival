var svg = document.getElementById("thing");
var clear = document.getElementById("clear");
var t = 0;
var guessX = 0;
var guessY = 0;
var x = Math.random()*500;
var y = Math.random()*500;


var drawcirc = function(x,y,r){
    var circ = {
        circle : document.createElementNS("http://www.w3.org/2000/svg", "circle"),

        changecol: function(event){
            if (this.getAttribute("fill") == "red"){
                this.setAttribute("fill", "blue")
            }
            else {
                console.log(this)
                console.log(svg.removeChild(this));
                x = Math.random()*500;
                y = Math.random()*500;
                drawcirc(x,y,r)
            }
            event.stopPropagation();
    }

 }

    circ.circle.setAttribute("cx", x);
    circ.circle.setAttribute("cy", y);
    circ.circle.setAttribute("r", r);
    circ.circle.setAttribute("fill", "red");
    svg.appendChild(circ.circle)
    circ.circle.addEventListener("click", circ.changecol);
    }


var draw = function(event){
    storeGuess(event);
    drawcirc(guessX, guessY, 20);
    event.stopPropagation();
}

function storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;
    console.log("x coords: " + guessX + ", y coords: " + guessY);
}

var clearcan = function(event){
    svg.innerHTML = "";
    t = 0
}


clear.addEventListener("click", clearcan);
svg.addEventListener("click", draw);