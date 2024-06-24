"use strict";

// 1. Напишіть функцію printNumbers(from, to, interval), яка послідовно виводить у консоль цілі числа, починаючи з from і закінчуючи to, з інтервалом між виведенням сусідніх чисел у interval мс.
// Реалізуйте перший або обидва варіанти рішення:
// - Використовуючи setInterval.
// - *Використовуючи рекурсивний setTimeout (https://uk.javascript.info/settimeout-setinterval).

// 1//
const printNumbers = (from, to, interval) => {
  let current = from;

  const printNext = setInterval(() => {
    console.log("setInterval >>", current);
    if (current === to) {
      clearInterval(printNext);
    }
    current++;
  }, interval);
};

printNumbers(1, 5, 1000);

const printNumbersSetTimeout = (from, to, interval) => {
  let currentNumber = from;

  const printNextNumber = () => {
    console.log("setTimeout >>", currentNumber);
    if (currentNumber < to) {
      currentNumber++;
      setTimeout(printNextNumber, interval);
    }
  };

  setTimeout(printNextNumber, interval);
};

printNumbersSetTimeout(1, 5, 1000);

// 2. *Виводити посилання через певний час після завантаження сторінки. Поки посилання не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".

const linkEl = document.querySelector(".link");

let timer = 5;

const countdown = () => {
  timer--;
  linkEl.textContent = `Посилання стане доступним через ${timer} секунд`;

  if (timer <= 0) {
    clearInterval(intervalId);
    linkEl.innerHTML = `<a href="http://google.com">Посилання доступне!</a>`;
  }
};

const intervalId = setInterval(countdown, 1000);
linkEl.textContent = `Посилання стане доступним через ${timer} секунд`;
