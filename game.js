let score = 0;
const scoreDisplay = document.getElementById("score");
const tapButton = document.getElementById("tapButton");

tapButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});
