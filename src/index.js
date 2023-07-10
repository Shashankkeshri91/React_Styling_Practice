//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const currentTime = date.getHours();
console.log(currentTime);
let greetings;

const style = {
  color: ""
};

if (currentTime < 12) {
  greetings = "Good Morning";
  style.color = "red";
}
if (currentTime <= 18) {
  greetings = "Good Afternoon";
  style.color = "green";
} else {
  greetings = "Good Night";
  style.color = "blue";
}

// console.log(currentTime)

ReactDom.render(
  <h1 style={style}>{greetings}</h1>,
  document.getElementById("root")
);
