// Функція для виконання логіки кидання кубиків та визначення переможця
function rollDice() {
  // Випадкове число для Гравця 1
  const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  // console.log("Random number for Player 1:", randomNumber1); // Перевірка у консолі

  // Вибір випадкового зображення для Гравця 1
  const randomDiceImage1 = "dice" + randomNumber1 + ".png"; // e.g. dice1.png - dice6.png
  const imageSource1 = "images/" + randomDiceImage1; // e.g. images/dice6.png

  // Встановлення джерела зображення для Гравця 1
  document.querySelector(".img1").setAttribute("src", imageSource1);

  // Випадкове число для Гравця 2
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // console.log("Random number for Player 2:", randomNumber2); // Перевірка у консолі

  // Вибір випадкового зображення для Гравця 2
  const randomDiceImage2 = "dice" + randomNumber2 + ".png";
  const imageSource2 = "images/" + randomDiceImage2;

  // Встановлення джерела зображення для Гравця 2
  document.querySelector(".img2").setAttribute("src", imageSource2);

  // Зміна тексту заголовка <h1> залежно від переможця
  const heading = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins! 🚩";
  } else {
    heading.innerHTML = "It's a Draw!";
  }
}

// Виконання логіки кидання кубиків при завантаженні сторінки
document.addEventListener("DOMContentLoaded", rollDice);

// Додаємо обробник подій для кнопки "Refresh"
const refreshButton = document.querySelector(".refresh-button");
refreshButton.addEventListener("click", rollDice);

// Додаємо обробник подій для натискання клавіші "пробіл"
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        rollDice();
    }
});