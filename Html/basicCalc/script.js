"use strict";

const input = document.getElementById("text--in");
const ac = document.querySelector(".ACbutton");
const equals = document.getElementById("equal");

const allButtons = Array.from(document.querySelectorAll(".buttons"));
// console.log(allButtons);

const values = [];

allButtons.forEach((f) => {
  values.push(f.textContent);
});

allButtons.forEach((f) => {
  f.addEventListener("click", () => {
    values.forEach((v) => {
      if (v === f.textContent) {
        input.value += v;
      }
    });
  });
});

ac.addEventListener("click", () => {
  input.value = "";
});

equals.addEventListener("click", () => {
  input.value = eval(input.value);
});
