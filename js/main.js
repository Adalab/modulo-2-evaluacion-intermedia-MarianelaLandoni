"use strict";

//Traer los elementos de html a JS

const putNumber = document.querySelector(".js_putNumber");
const tryBtn = document.querySelector(".js_tryBtn");
const clue = document.querySelector(".js_clue");
const attemps = document.querySelector(".js_attemps");

//Crear el número aleatorio max=100

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(getRandomNumber(100));
