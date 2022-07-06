"use strict";
//Variables
//Variables para traer los elementos de html a JS

const putNumber = document.querySelector(".js_putNumber");
const tryBtn = document.querySelector(".js_tryBtn");
const clue = document.querySelector(".js_clue");
const attemps = document.querySelector(".js_attemps");

//Variable para el número aleatorio

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//variable inicial para el contador
let count = 0;

//Función para crear el número aleatorio max=100

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

/*Construir función handleInput. Al hacer click:
IMPORTANTE: lo que escriba la usuaria es un string, pasarlo a número con parseInt();
1-Comprobar si el número dado por la usuaria es = al random. Si es = gana, si no da pistas. Usar condicionales.
2-Comprobar si el número que introduce se encuentra entre 1 y 100
3-Poner el contador del número de intentos
*/

//Función para conseguir el número que pinta la usuaria y darle pistas si no adivina el número al primer intento

function clueMessages() {
  const getNumber = putNumber.value;
  const transformToNumber = parseInt(getNumber);
  if (transformToNumber === randomNumber) {
    clue.innerHTML = "Has ganado campeona!!!";
  } else if (transformToNumber < randomNumber) {
    clue.innerHTML = "Demasiado bajo";
  } else if (transformToNumber > randomNumber) {
    clue.innerHTML = "Demasiado alto";
  }
}

//Función para comprobar que el número que introduce está entre 1 y 100

function checkCorrectNumber() {
  const getNumber = putNumber.value;
  const transformToNumber = parseInt(getNumber);
  if (transformToNumber < 1 || transformToNumber > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
  }
}

//Función para contar el número de intentos
function numberAttemps() {
  count++;
  attemps.innerHTML = `Número de intentos: ${count}`;
}

function handleInput() {
  checkCorrectNumber();
  clueMessages();
  numberAttemps();
}

//Añadir el evento click

tryBtn.addEventListener("click", handleInput);
