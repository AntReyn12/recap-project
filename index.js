const inputBtn = document.querySelector(".btn");
const showValue = document.querySelector(".user-input");
const inputValue = document.querySelector("#typed-input");

inputBtn.addEventListener("click", showInput);

function showInput() {
  showValue.textContent = inputValue.value;
  showValue.classList.remove("hide");
}
