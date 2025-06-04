function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const randomImage1 = "images/dice" + randomNumber1 + ".png";
  const randomImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImage1);
  document.querySelector(".img2").setAttribute("src", randomImage2);

  const title = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🏆 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    title.innerHTML = "Player 2 Wins! 🏆";
  } else {
    title.innerHTML = "🚩 Draw!";
  }
}

// Запуск при загрузці
rollDice();

// пробіл оновленя стори
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    rollDice();
  }
});
