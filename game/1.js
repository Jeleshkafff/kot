const game_section = document.querySelector(".game");

for (let i = 0; i < 12; i++) {
  let img = document.createElement("img");
  game_section.append(img);
  img.src = "img/back.svg";
  img.className = "card";
  function i() {
    img.src = "img/back.svg";
  }
  img.addEventListener(`click`, function () {
    img.src = "";
    setTimeout(i, 1000);
  });
}
function p() {
  for (let i = 0; i < 12; i++) {
    let img1 = document.createElement("div");
    game_section.append(img1);
    img1.className = "card1";
    img1.style.background = colorr[i];
  }
}
let colorr = [
  "red",
  "pink",
  "blue",
  "orange",
  "green",
  "black",
  "red",
  "pink",
  "blue",
  "orange",
  "green",
  "black",
];
p();
