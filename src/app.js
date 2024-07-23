/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function randomCalc(leng) {
  return Math.floor(Math.random() * leng);
}
window.onload = function() {
  console.log("Hello Rigo from the console!");
};
document.getElementById("startworker").onclick = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = [" ate", " peed", " crushed", " broke"];
  let what = [" my homework", " my phone", " the car"];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];
  var r =
    who[randomCalc(who.length)] +
    action[randomCalc(action.length)] +
    what[randomCalc(what.length)] +
    when[randomCalc(when.length)];
  document.getElementById("result").innerText = r;
};
