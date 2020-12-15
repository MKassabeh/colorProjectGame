//Déclaration Variable  

var squarecolor =document.querySelectorAll(".square");
var score = document.getElementById('colorDisplay');
// Couleur aléatoire 


function randomColor(){
    var color = Math.floor(Math.random() * 255) + 1
    return color
}



// Début du jeu 

score.textContent="RGB ( "+ r+" , "+g+" , "+b +" )" ;


for (let index = 0; index < squarecolor.length; index++) {

    var r=randomColor()
    var g=randomColor()
    var b=randomColor()
    score.textContent="RGB ( "+ r+" , "+g+" , "+b +" )" ;
    squarecolor[index].style.backgroundColor='rgb(' + r + ' ,' + g +','+ b  +')'

}