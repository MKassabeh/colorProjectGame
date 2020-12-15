//Déclaration Variable  

var squarecolor =document.querySelectorAll(".square");
var score = document.getElementById('colorDisplay');
var resetColor = document.getElementById("reset");
var titleman=document.getElementById("mainTitle");
var winningmessage=document.getElementById("message");
var easymode = document.getElementById("modeEasy");
var hardmode=document.getElementById("mode");
// Couleur aléatoire 


function randomColor(){
    var color = Math.floor(Math.random() * 255) + 1
    return color
}


// Début du jeu 


for (let index = 0; index < squarecolor.length; index++) {

    var r=randomColor()
    var g=randomColor()
    var b=randomColor()
    score.textContent='rgb('+r+', '+g+', '+b+')' ;
    squarecolor[index].style.backgroundColor='rgb('+r+', '+g+', '+b+')';
   
    squarecolor[index].addEventListener('click',function(){
        if(squarecolor[index].style.backgroundColor===score.textContent){
            
            squarecolor.forEach(element => {
                winningmessage.textContent="Correct!"
                resetColor.textContent="Play Again ?"
                titleman.style.backgroundColor=score.textContent
                element.style.visibility="visible";
                element.style.backgroundColor=score.textContent
                
        })
    }else{
        squarecolor[index].style.visibility="hidden"
        winningmessage.textContent="Retry !"
    }
    })
}



resetColor.addEventListener('click',function(){
    squarecolor.forEach(element => {
        resetColor.textContent="New Color"
        titleman.style.backgroundColor="steelblue"
        winningmessage.textContent="";
        var r=randomColor()
        var g=randomColor()
        var b=randomColor()
        element.style.backgroundColor='rgb('+r+', '+g+', '+b+')';
        score.textContent='rgb('+r+', '+g+', '+b+')';
    });
    
    
})


easymode.addEventListener('click',function() {
    hardmode.classList.remove('selected')
    easymode.classList.add('selected')
    for (let index = 0; index < squarecolor.length; index++) {
        if(index<=2){
            var r=randomColor()
            var g=randomColor()
            var b=randomColor()
            score.textContent='rgb('+r+', '+g+', '+b+')' ;
            squarecolor[index].style.backgroundColor='rgb('+r+', '+g+', '+b+')';   
            resetColor.textContent="New Color"
            titleman.style.backgroundColor="steelblue"
            winningmessage.textContent="";

            
        }else{
            squarecolor[index].style.visibility="hidden"
        }

    }

    
})



hardmode.addEventListener('click',function() {
    easymode.classList.remove('selected')
    hardmode.classList.add('selected')
    squarecolor.forEach(element => {
        element.style.visibility="visible"
        var r=randomColor()
        var g=randomColor()
        var b=randomColor()
        score.textContent='rgb('+r+', '+g+', '+b+')' ;
        element.style.backgroundColor='rgb('+r+', '+g+', '+b+')';    
        resetColor.textContent="New Color"
        titleman.style.backgroundColor="steelblue"
        winningmessage.textContent="";

    });
})