const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const phoneRegex = /^(?:(?:1\s)?[0-9][0-9][0-9]\s?|(?:1\s?)?\([0-9][0-9][0-9]\)\s?|(?:1\s)?[0-9][0-9][0-9]-)[0-9][0-9][0-9][-\s]?[0-9][0-9][0-9][0-9]$/;

const isNumberValid = (str) => {
  if (str === "") {
    alert("Please provide a phone number");
    return;
  }
  if (phoneRegex.test(str)) {
    displayResult(str, "Valid");
  } else {
    displayResult(str, "Invalid")
  }
  userInput.value = "";
  return;
};

const displayResult = (str, text) => {
  result.innerHTML += `<div class="result-display ${text}">${text} US number: ${str}</div>`;
  return;
}; 

checkButton.addEventListener("click", () => {
  isNumberValid(userInput.value);
  return;
});

clearButton.addEventListener("click", () => {
  result.innerHTML = "";
});

//Creating the pop-up modal

const examplesButton = document.getElementById("examples-btn");
const closeButton = document.getElementsByClassName("close")[0];
const modal = document.getElementById("modal");

examplesButton.addEventListener("click", () => {
  modal.style.display = "block";
  return;
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  return;
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    return;
  }
  return;
});