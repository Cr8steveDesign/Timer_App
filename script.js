"use strict";

//Selecting Elements

let body = document.getElementById("body");
let labelTime = document.getElementById("timer");
let userMinutes = document.getElementById("customTime");
let btnStart = document.getElementById("start-btn");
let btnStop = document.getElementById("stop-btn");
let dateText = document.getElementById("date");

//Creating Current date

setInterval(() => {
  let now = new Date();
  let options = {
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
    millisecond: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  dateText.textContent = Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(now);
}, 1000);
console.log(Intl);

//Implementing Countdown
let timeSecs;
let hour, mins, secs, timer;
let min = "00";
let count = 0;
let music = new Audio("music.mp3");
let musicfinish = new Audio("finish.mp3");

btnStart.addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
  }
  timeSecs = Number(userMinutes.value) * 60;

  timer = setInterval(() => {
    hour = String(Math.trunc(timeSecs / (60 * 60))).padStart(2, 0);
    mins = String(Math.trunc(timeSecs / 60)).padStart(2, 0);
    secs = String(Math.trunc(timeSecs % 60)).padStart(2, 0);

    // Checks if the min hand is greater than 59 at which it will assign min which olds string '00' t0 the value of mins which will be displayed on the field
    if (mins > 59) {
      mins = min;
    }

    labelTime.textContent = `${hour}:${mins}:${secs}`;

    timeSecs--;
    if (timeSecs === 0 || timeSecs === undefined || timeSecs < 0 || +mins < 0) {
      labelTime.textContent = "00:00:00";
      clearInterval(timer);
    }

    if (timeSecs === 0) {
      musicfinish.play();
      musicfinish.loop(2);
    }
    if (count > colors.length) {
      count = 0;
    }
    count++;
    labelTime.style.color = colors[count];
    //music
    music.play();
    // music.loop();

    //change text color as per interval call
  }, 1000);
});
btnStop.addEventListener("click", function () {
  clearInterval(timer);
  musicfinish.pause();
});

//Array of Backgrounds
let colors = [
  "#FFC107", // yellow
  "#FF9800", // orange
  "#FF5722", // red-orange
  "#E91E63", // magenta
  "#9C27B0", // purple
  "#673AB7", // deep purple
  "#3F51B5", // indigo
  "#2196F3", // blue
  "#03A9F4", // light blue
  "#00BCD4", // cyan
  "#009688", // teal
  "#4CAF50", // green
  "#8BC34A", // lime green
  "#CDDC39", // yellow green
  "#FFEB3B", // bright yellow
  "#FFCDD2", // light pink
  "#F8BBD0", // light pink-purple
  "#E1BEE7", // lavender
  "#D1C4E9", // light purple-blue
  "#BBDEFB", // light blue
  "#B3E5FC", // light blue-green
  "#B2EBF2", // pale blue
  "#B2DFDB", // blue-green
  "#C8E6C9", // pale green
  "#DCEDC8", // pale green-yellow
  "#F0F4C3", // pale yellow-green
  "#FFF9C4", // pale yellow
  "#FFE0B2", // pale orange
  "#FFCCBC", // pale pink-orange
  "#D7CCC8", // pale gray-brown
  "#BCAAA4", // light brown-gray
  "#8D6E63", // medium brown
  "#795548", // brown
  "#6D4C41", // dark brown
  "#FF8A80", // salmon pink
  "#FF5252", // bright red
  "#FF1744", // strong red
  "#D50000", // deep red
  "#C51162", // pink-purple
  "#AA00FF", // purple-magenta
  "#6200EA", // dark purple
  "#304FFE", // bright blue
  "#2962FF", // medium blue
  "#0091EA", // bright blue-green
  "#00B8D4", // teal blue
  "#00BFA5", // green-blue
  "#00C853", // bright green
  "#64DD17", // lime green
  "#AEEA00", // bright yellow-green
  "#FFD600", // bright yellow
  "#FFAB00", // orange-yellow
  "#FF6D00", // orange-red
  "#DD2C00", // deep orange-red
  "#6200EA", // dark purple
  "#304FFE", // bright blue
  "#2962FF", // medium blue
  "#0091EA", // bright blue-green
  "#00B8D4", // teal blue
  "#00BFA5", // green-blue
  "#00C853", // bright green
  "#64DD17", // lime green
  "#AEEA00", // bright yellow-green
  "#FFD600", // bright yellow
  "#FFAB00", // orange-yellow
  "#FF6D00", // orange-red
  "#DD2C00", // deep orange-red
];

//Old color array here
// [
//   "aliceblue",
//   "antiquewhite",
//   "aqua",
//   "aquamarine",
//   "azure",
//   "beige",
//   "bisque",
//   "black",
//   "blanchedalmond",
//   "blue",
//   "blueviolet",
//   "brown",
//   "burlywood",
//   "cadetblue",
//   "chartreuse",
//   "chocolate",
//   "coral",
//   "cornflowerblue",
//   "cornsilk",
//   "crimson",
//   "cyan",
//   "darkblue",
//   "darkcyan",
//   "darkgoldenrod",
//   "darkgray",
//   "darkgrey",
//   "darkgreen",
//   "darkkhaki",
//   "darkmagenta",
//   "darkolivegreen",
//   "darkorange",
//   "darkorchid",
//   "darkred",
//   "darksalmon",
//   "darkseagreen",
//   "darkslateblue",
//   "darkslategray",
//   "darkslategrey",
//   "darkturquoise",
//   "darkviolet",
//   "deeppink",
//   "deepskyblue",
//   "dimgray",
//   "dimgrey",
//   "dodgerblue",
//   "firebrick",
//   "floralwhite",
//   "forestgreen",
//   "fuchsia",
//   "gainsboro",
//   "ghostwhite",
// ];
