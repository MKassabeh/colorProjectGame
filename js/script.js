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
    var answer = Math.floor(Math.random() *3)
    console.log(answer)    
    if(easymode.classList="selected"){
        for (let index = 0; index < squarecolor.length; index++) {    
            if(index<=2){
                var r=randomColor()
                var g=randomColor()
                var b=randomColor()
                resetColor.textContent="New Color"
                titleman.style.backgroundColor="steelblue"
                winningmessage.textContent="";
                squarecolor[index].style.visibility="visible"
                console.log(answer)
                
                if(answer===index){
                    score.textContent='rgb('+r+', '+g+', '+b+')'
                    squarecolor[answer].style.backgroundColor=score.textContent
                    
                }else{
                    squarecolor[index].style.backgroundColor='rgb('+r+', '+g+', '+b+')';
                }
            }else{
                squarecolor[index].style.visibility="hidden"
            }
    
        }
    }
}

// Début du jeu 


for (let index = 0; index < squarecolor.length; index++) {

    var r=randomColor()
    var g=randomColor()
    var b=randomColor()
    if(answer===index){
        score.textContent='rgb('+r+', '+g+', '+b+')'
        squarecolor[answer].style.backgroundColor=score.textContent
    }else{
        squarecolor[index].style.backgroundColor='rgb('+r+', '+g+', '+b+')';
    }
        // click on square 

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

// reset button
resetColor.addEventListener('click',function(){
    
        resetColor.textContent="New Color"
        titleman.style.backgroundColor="steelblue"
        winningmessage.textContent="";
        squarecolor.forEach(element => {
        if(easymode.className==="selected"){
            easymode.classList.add('selected')
            easyMode()
            
        }
        else{
            easymode.classList.remove('selected')
            var answer = Math.floor(Math.random() * squarecolor.length)
            for (let index = 0; index < squarecolor.length; index++) {
                var r=randomColor()
                var g=randomColor()
                var b=randomColor()
               
                if(answer===index){
                score.textContent='rgb('+r+', '+g+', '+b+')'
                squarecolor[answer].style.backgroundColor=score.textContent
                console.log(answer)
            }else{
                squarecolor[index].style.backgroundColor='rgb('+r+', '+g+', '+b+')';
            }  
                
            }
 
            
        }
    });    
})


// easyMode button
easymode.addEventListener('click',function() {
    hardmode.classList.remove('selected')
    easymode.classList.add('selected')
    easyMode()
    
    
})

// hardMode button
hardmode.addEventListener('click',function() {
    easymode.classList.remove('selected')
    hardmode.classList.add('selected')
    var answer = Math.floor(Math.random() * squarecolor.length)
    for (let index = 0; index < squarecolor.length; index++) {
        squarecolor[index].style.visibility="visible"
        var r=randomColor()
        var g=randomColor()
        var b=randomColor()
        resetColor.textContent="New Color"
        titleman.style.backgroundColor="steelblue"
        winningmessage.textContent=""
        if(answer===index){
            score.textContent='rgb('+r+', '+g+', '+b+')'
            squarecolor[answer].style.backgroundColor=score.textContent
        }else{
            squarecolor[index].style.backgroundColor='rgb('+r+', '+g+', '+b+')';
        }   
    }
});
