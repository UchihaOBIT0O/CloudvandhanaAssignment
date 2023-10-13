"use strict";

const arr = [1, 2, 3, 9, 8, 7, 4, 6, 5];
const descending = (arr) => arr.sort((a, b) => b - a);
document.getElementById("arr").textContent += `${arr}`;
document.getElementById("span").textContent += descending(arr);
