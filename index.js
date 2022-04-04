const inputBtn = document.querySelector(".btn");
const showValue = document.querySelector(".user-input");
const inputValue = document.querySelector("#typed-input");

console.log(inputBtn);
console.log(showValue);

inputBtn.addEventListener("click", showInput);

function showInput() {
  showValue.textContent = inputValue.value;
}
