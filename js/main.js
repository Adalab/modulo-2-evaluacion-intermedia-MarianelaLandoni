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

//Comprobación que funciona
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

/*Construir función handleInput. Al hacer click:
IMPORTANTE: lo que escriba la usuaria es un string, pasarlo a número con parseInt();
1-Comprobar si el número dado por la usuaria es = al random. Si es = gana, si no da pistas. Usar condicionales.

*/

//Función para conseguir el número que pinta la usuaria

function handleInput() {
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

//Añadir el evento click

tryBtn.addEventListener("click", handleInput);
