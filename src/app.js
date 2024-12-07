/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let text = "";
  let excuse = document.getElementById("excuse");
  console.log("Hello Rigo from the console!");
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class ",
    "when I was sleeping ",
    "while I was exercising ",
    "during my lunch ",
    "while I was praying "
  ];

  text += who[Math.trunc(Math.random()) * 3];
  text += action[Math.trunc(Math.random()) * 3];
  text += what[Math.trunc(Math.random()) * 3];
  text += when[Math.trunc(Math.random()) * 3];

  excuse.textContent = text;
  excuse.style.textAlign = "center";
};


