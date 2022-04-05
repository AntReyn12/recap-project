const inputBtn = document.querySelector(".show-btn");
const hideBtn = document.querySelector(".hide-btn");
const showValue = document.querySelector(".user-input");
const inputValue = document.querySelector("#typed-input");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const countValue = document.querySelector(".count-value");
let count = 0;
countValue.textContent = "Count: " + count;

inputBtn.addEventListener("click", showInput);
hideBtn.addEventListener("click", function () {
  showValue.classList.add("hide");
  inputValue.value = "";
});

function showInput() {
  showValue.textContent = inputValue.value;
  showValue.classList.remove("hide");
  inputValue.value = "";
}

add.addEventListener("click", function () {
  count += 1;
  countValue.textContent = "Count: " + count;
});

subtract.addEventListener("click", function () {
  count -= 1;
  countValue.textContent = "Count: " + count;
});
