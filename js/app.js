// Имеется текстовое поле на странице. При фокусировке на этом поле
// сбоку появляется <div> с информацией.
// При пропаже фокуса - <div> так же пропадает
const textArea = document.getElementById("text-area");
textArea.addEventListener("mouseover", moveArea);

function moveArea() {
  const wrapper = document.getElementById("wrapper");
  const newDiv = document.createElement("div");
  newDiv.textContent = "new text";

  wrapper.appendChild(newDiv);
  textArea.addEventListener("mouseout", () => newDiv.remove());
}

moveArea();
// На странице есть две кнопки. При клике на первую кнопку просим пользователя
// ввести в prompt ссылку, при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). Реализовать проверку
// на http / https. Если протокол не указан - добавляем

{
  const btnInputLink = document.querySelector(".input-link");
  const btnOpenLink = document.querySelector(".open-link");
  btnInputLink.addEventListener("click", inputLink);
  btnOpenLink.addEventListener("click", openLink);
  let link = "";

  function inputLink() {
    do {
      link = prompt("enter your link");
    } while (link === "");
    if (
      !link.startsWith("http://") &&
      !link.startsWith("https://") &&
      !link.startsWith("//")
    ) {
      link = "http://" + link;
    }
  }
  function openLink() {
    window.open(link);
  }
}
// Вывести таблицу 10 × 10, заполненную числами
// от 1 до 100 (таблица создаётся динамически)
const table = document.createElement("table");
document.body.appendChild(table);
for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
  const row = document.createElement("tr");
  table.appendChild(row);
  for (let columnIndex = 1; columnIndex <= 10; columnIndex++) {
    const cell = document.createElement("td");
    row.appendChild(cell);
    cell.textContent = rowIndex * 10 + columnIndex;
  }
}
// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg,
// 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение
// из этой папки полученное случайным образом (Math.random)
const img = document.createElement("img");
document.body.appendChild(img);
function getRandomImg(max) {
  return Math.floor(Math.random() * max) + 1;
}
let randomImg = getRandomImg(9);
img.src = `/images/${randomImg}.png`;
