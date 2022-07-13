'use strict';

//Variables
//Variables para traer los elementos de html a JS

const putNumber = document.querySelector('.js_putNumber');
const tryBtn = document.querySelector('.js_tryBtn');
const getClue = document.querySelector('.js_clue');
const getAttemps = document.querySelector('.js_attemps');

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

//Función para poner los mensajes que ve la usuaria

function giveMesagge(message) {
  getClue.innerHTML = message;
}

//Función para conseguir el número que pinta la usuaria comprobar que el número está en el rango y darle pistas si no adivina el número al primer intento

function validateUserNumber() {
  const getNumber = parseInt(putNumber.value);

  if (isNaN(getNumber)) {
    giveMesagge(' ❌ Escribe un número entre 1 y 100');
  } else if (getNumber < 1 || getNumber > 100) {
    giveMesagge(' ❌ El número debe estar entre 1 y 100');
  } else if (getNumber < randomNumber) {
    giveMesagge('Demasiado bajo ⬇');
  } else if (getNumber > randomNumber) {
    giveMesagge('Demasiado alto ⬆');
  } else if (getNumber === randomNumber) {
    giveMesagge('¡¡¡Enhorabuena, has ganado campeona!!! 🏆🥇');
  }
}

//Función para contar el número de intentos
function getNumberAttemps() {
  count++;
  getAttemps.innerHTML = `Número de intentos: ${count}`;
}

//Función manejadora del evento

function handleClick() {
  validateUserNumber();
  getNumberAttemps();
}

//Añadir el evento click

tryBtn.addEventListener('click', handleClick);
