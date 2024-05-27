"use strict";

const includeField = document.querySelector("#include");
const excludeField = document.querySelector("#exclude");
const cluesOutput = document.querySelector("pre#clues");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const include = includeField.value.toLowerCase().trim();
  const exclude = excludeField.value.toLowerCase().trim();
  cluesOutput.textContent = findFive(include, exclude).join("\n").toUpperCase();
});
