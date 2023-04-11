function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorButton.addEventListener ('click', ()=> {
const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
currentColor.textContent = randomColor;
})
