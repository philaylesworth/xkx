"use strict";

document.querySelector("#clueform").addEventListener("submit", (event) => {
  event.preventDefault();
  const output = document.getElementById("clues");
  function makeCorrectArray(...a) {
    return a
      .map((e) => (e === "" ? "." : e))
      .join("")
      .toLowerCase();
  }
  const correctLetterCorrectLocation = makeCorrectArray(
    document.getElementById("location1").value.toLowerCase(),
    document.getElementById("location2").value.toLowerCase(),
    document.getElementById("location3").value.toLowerCase(),
    document.getElementById("location4").value.toLowerCase(),
    document.getElementById("location5").value.toLowerCase()
  );
  const correctLetterWrongLocation = [
    document.getElementById("letter1").value.toLowerCase(),
    document.getElementById("letter2").value.toLowerCase(),
    document.getElementById("letter3").value.toLowerCase(),
    document.getElementById("letter4").value.toLowerCase(),
    document.getElementById("letter5").value.toLowerCase(),
  ];

  const correct = correctLetterWrongLocation.join("");
  const wrong = document.getElementById("wrong").value.toLowerCase();
  const regexLocation = new RegExp(correctLetterCorrectLocation);
  let match = dic.filter((e) => regexLocation.test(e));
  for (let l of correct) {
    match = match.filter((e) => e.includes(l));
  }
  for (let l of wrong) {
    match = match.filter((e) => !e.includes(l));
  }

  // remove words with correct letters in wrong location
  for (let i in correctLetterWrongLocation) {
    const wrong = correctLetterWrongLocation[i];
    const regex = new RegExp(`${".".repeat(i)}[${wrong}]${".".repeat(4 - i)}`);
    if (!wrong.length) continue;
    match = match.filter((e) => !e.match(regex));
  }

  // create list of letters to elimiate
  let letters = match.join("").split("");
  console.log(correctLetterWrongLocation, correctLetterCorrectLocation);
  let correctLetters = correctLetterWrongLocation.join("") + correctLetterCorrectLocation;
  let eliminateObject = {};
  for (let l of letters) {
    if (correctLetters.includes(l)) continue;
    if (l in eliminateObject) {
      eliminateObject[l] += 1;
    } else {
      eliminateObject[l] = 1;
    }
  }
  let eliminateArray = [];
  let i = 0;
  for(let l in eliminateObject) {
    eliminateArray[i++] = {l:l, n:eliminateObject[l]};
  }
  eliminateArray.sort((a,b) => a.n > b.n ? -1 : 1);
  
  let eliminateString = '';
  for(let e of eliminateArray) {
    eliminateString += e.l;
  }

  const span = document.querySelector("p span");
  const boldMessage = document.querySelector("p b");
  boldMessage.textContent = `There are ${match.length} possible words.`;
  span.textContent = "";
  if (match.length > 1) {
    span.textContent = eliminateString.toUpperCase();
  }

  output.textContent = match.join("\n").toUpperCase();
});
