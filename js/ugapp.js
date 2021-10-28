// Создать приложение для отображения результатов голосования. В качестве вариантов ответа - смайлики. По умолчанию, 5шт.
// Вывод данных - смайлики в одну строку, под ними - количество проголосовавших за каждый смайл
// При клике на смайл - под ним изменяется значение счетчика
// Реализовать таким образом, чтобы добавление новых вариантов ответа не вело к добавлению новых функций
const election = [
  { votes: 0, image: "/images/1.png" },
  { votes: 4, image: "/images/2.png" },
  { votes: 2, image: "/images/3.png" },
  { votes: 6, image: "/images/4.png" },
  { votes: 1, image: "/images/5.png" },
];
for (let index = 0; index < election.length; index++) {
  const candidate = election[index];
  let div = document.createElement("div");
  document.body.appendChild(div);
  let img = document.createElement("img");
  div.appendChild(img);
  img.src = candidate.image;
  let countEl = document.createElement("p");
  div.appendChild(countEl);
  countEl.textContent = candidate.votes;
  div.addEventListener("click", () => addVote(candidate, countEl));
}

function addVote(candidate, countEl) {
  candidate.votes++;
  countEl.textContent = candidate.votes;
}
