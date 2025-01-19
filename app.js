// buttons
const btnP1 = document.querySelector('#button-one')
const btnP2 = document.querySelector('#button-two')
const btnRes = document.querySelector('#button-reset')
const maxPoint = document.querySelector('select')
const buttons = document.querySelector('#buttons')

// point
let score1 = document.querySelector('#score-player1')
let score2 = document.querySelector('#score-player2')

// functions



btnP1.addEventListener('click',() => score1.innerText++)

btnP2.addEventListener('click',() => score2.innerText++)

btnRes.addEventListener('click',() =>{
    score1.innerText=0
    score2.innerText=0
    })

buttons.addEventListener('click', 
   function () {
    if (parseInt(score1.innerText) === parseInt(maxPoint.value) || parseInt(score2.innerText) === parseInt(maxPoint.value)) {
        btnP1.toggleAttribute('disabled')
        btnP2.toggleAttribute('disabled')
    if(parseInt(score1.innerText)>parseInt(score2.innerText)){
        score1.style.color= 'green'
        score2.style.color='red' 
    } else {
        score1.style.color= 'red'
        score2.style.color='green' 
    }
} else {btnP1.removeAttribute('disabled')
        btnP2.removeAttribute('disabled')
        score1.style.color= ''
        score2.style.color='' 

}
} 
)  
