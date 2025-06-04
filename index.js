function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const diceImage1 = "images/dice" + randomNumber1 + ".png";
  const diceImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", diceImage1);
  document.querySelector(".img2").setAttribute("src", diceImage2);

  const title = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🏆 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    title.innerHTML = "Player 2 Wins! 🏆";
  } else {
    title.innerHTML = "🚩 Draw!";
  }
}

// Доступна глобально для кнопки
window.rollDice = rollDice;

// Після завантаження сторінки
window.onload = function () {
  rollDice();

  // Пробіл — кидок кубиків
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      event.preventDefault();
      rollDice();
    }
  });
};
