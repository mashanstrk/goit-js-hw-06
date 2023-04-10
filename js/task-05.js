const inputField = document.querySelector("#name-input");
const inputName = document.querySelector("#name-output");

inputField.addEventListener("input", event => {
inputName.textContent = event.target.value ? event.target.value : "Anonymous";
})