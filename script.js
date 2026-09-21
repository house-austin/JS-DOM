const counterButton = document.querySelector("#counterButton");
const counterDisplay = document.querySelector("#counter");
const toggleButton = document.querySelector("#toggleButton");
const toggleText = document.querySelector("#toggleText");
const inputEcho = document.querySelector("#inputEcho");
const outputEcho = document.querySelector("#outputEcho");
const listInput = document.querySelector("#itemList")
const listButton document.querySelector("#addButton")
const listItem document.createElement("li")


let count = 0;

counterButton.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
})

toggleButton.addEventListener("click", function() {
    toggleText.classList.toggle("hidden");
})

inputEcho.addEventListener("input", function() {
    outputEcho.textContent = inputEcho.value;
})

