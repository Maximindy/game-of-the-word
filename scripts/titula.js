
const titula =  document.getElementById("titula")

const bebra = [
    "Type fast, win big!",
    "No mistakes allowed!",
    "Only the fastest survive!",
    "Your fingers are your weapons!"
]

let index = 0
setInterval(() => {
    titula.innerText = bebra[index]
    index++
    if (index == bebra.length) {
        index = 0
    } 
}, 3000);





