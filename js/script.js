//Déclaration Variable  

var squarecolor =document.querySelectorAll(".square");
var score = document.getElementById('colorDisplay');
var resetColor = document.getElementById("reset");
var titleman=document.getElementById("mainTitle");
var winningmessage=document.getElementById("message");
var easymode = document.getElementById("modeEasy");
var hardmode=document.getElementById("mode");
var answer = Math.floor(Math.random() * squarecolor.length)

// Couleur aléatoire 

function randomColor(){
    var color = Math.floor(Math.random() * 255)
    return color
}

function easyMode(){
    if(easymode.classList="selected"){
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
                squarecolor[index].style.visibility="visible"
            }else{
                squarecolor[index].style.visibility="hidden"
            }
    
        }
    }
    
}
// Début du jeu 



for (let index = 0; index < squarecolor.length; index++) {
    if(answer=index){
        console.log(answer)
        score.textContent='rgb('+r+', '+g+', '+b+')' ;
    }
    var r=randomColor()
    var g=randomColor()
    var b=randomColor()
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
    
        resetColor.textContent="New Color"
        titleman.style.backgroundColor="steelblue"
        winningmessage.textContent="";
        squarecolor.forEach(element => {
        if(easymode.className==="selected"){
            easymode.classList.add('selected')
            console.log('hi')
            easyMode()
        }
        else{
            easymode.classList.remove('selected')
            var r=randomColor()
            var g=randomColor()
            var b=randomColor()
            element.style.backgroundColor='rgb('+r+', '+g+', '+b+')';
            score.textContent='rgb('+r+', '+g+', '+b+')';
        }
    });    
})

easymode.addEventListener('click',function() {
    hardmode.classList.remove('selected')
    easymode.classList.add('selected')
    easyMode() 
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