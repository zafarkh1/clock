setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const currentSecond = currentDate.getSeconds() / 60;
  const currentMinute = (currentSecond + currentDate.getMinutes()) / 60;
  const currentHour = (currentMinute + currentDate.getHours()) / 12;
  setRotation(secondHand, currentSecond);
  setRotation(minuteHand, currentMinute);
  setRotation(hourHand, currentHour);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
console.log(123);
