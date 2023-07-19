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
