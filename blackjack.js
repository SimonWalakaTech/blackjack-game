let num1 = getRandom()
let num2 = getRandom()
let caRDS =[num1,num2]
let kard = document.getElementById("ss")
let suM = document.getElementById("sm")
let suM2 = document .getElementById("sm1")

let isAlive=false
let mese = document.getElementById("mm")

let message = ""

function getRandom(){
    return Math.floor( Math.random()*13)+1
}
function start(){
    rendergame()
}


function rendergame(){
Um = num1+num2
suM.textContent= "Sum:" +Um
kard.innerText= "cards are"
for(i=0;i<caRDS.length;i++){
    kard.textContent +=caRDS[i]+" "
}
if (Um <= 20) {
    message = "Do you want to draw a new card?"
} else if (Um === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"

}
mese.textContent = message
}





function add(){
    
    let num = getRandom()
    let two = Um +=num
    Um = two
    
    suM2.textContent ="sum 2:" + two
    suM.textContent=Um
    
    caRDS.push(num)
    console.log(caRDS)
    
     rendergame()
}
