const button0 = document.getElementById("button0")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const seconds = document.getElementById("seconds")
const letters = document.getElementById("letters")

let level;














button2.addEventListener("click" ,function() {
    button1.classList.remove("acktive")
    button2.classList.add("acktive")
    button3.classList.remove("acktive")
    button4.classList.remove("acktive")

    seconds.innerText = "5 seconds"
    letters.innerText = "5 - 8 letters"
        level = "medium"
}) 



button1.addEventListener("click" ,function() {
    button2.classList.remove("acktive")
    button1.classList.add("acktive")
    button3.classList.remove("acktive")
    button4.classList.remove("acktive")

        seconds.innerText = "3 seconds"
    letters.innerText = "3 - 5 letters"
    level = "easy"
}) 


button3.addEventListener("click" ,function() {
    button1.classList.remove("acktive")
    button3.classList.add("acktive")
    button2.classList.remove("acktive")
    button4.classList.remove("acktive")

        seconds.innerText = "5 seconds"
    letters.innerText = "6 - 9 letters"
        level = "hard"
}) 


button4.addEventListener("click" ,function() {
    button1.classList.remove("acktive")
    button4.classList.add("acktive")
    button3.classList.remove("acktive")
    button2.classList.remove("acktive")

        seconds.innerText = "3 seconds"
    letters.innerText = "8 - 12 letters"
        level = "extreme"
}) 




button0.addEventListener("click" ,function() {
    console.log(level)
    window.location.href = "http://127.0.0.1:5500/game.html?level=" + level
}) 


