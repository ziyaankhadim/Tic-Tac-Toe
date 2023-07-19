"use strict";
console.log(`Welcome! to Tic Tac Toe Game`);
let ting = new Audio("../audio/ting.mp3");
let music = new Audio("../audio/music.mp3");
let gameover = new Audio("../audio/gameover.mp3");
let turn = "X";
let isgameover = false;
// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      isgameover = true;
      console.log(`${boxtext[e[0]].innerText} Won`);
    }
  });
};
// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!isgameover) {
        console.log(`${turn} turn`);
      }
    }
  });
});
