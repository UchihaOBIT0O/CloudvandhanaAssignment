"use strict";
const text = document.querySelector(".text");

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".s").textContent = text.value
    .split(" ")
    .map((m) => m.split("").reverse().join(""))
    .join(" ");
  text.value = "";
});
