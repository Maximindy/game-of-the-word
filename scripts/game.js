
const pyryms = new URLSearchParams(window.location.search);
const level = pyryms.get('level');
let time;
let words; 

switch (level) {
    case "easy":
        time = 3;
        break;

    case "medium":
        time = 5;
        break;

    case "hard":
        time = 5;
        break;

    case "extreme":
        time = 3;
        break;

    default:
        console.log("Неизвестный уровень");
        break;
}
fetch(`./data/${level}.json`)
  .then(response => response.json())
  .then(data => {
    words = data;
    document.write(words)
  });
console.log(words)

