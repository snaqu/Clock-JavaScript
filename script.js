document.addEventListener("DOMContentLoaded", () => {
  let secondHand = document.querySelector(".second-hand");
  let minuteHand = document.querySelector(".min-hand");
  let hourHand = document.querySelector(".hour-hand");
  let watch = document.querySelector(".watch");
  setInterval(() => {
    let date = new Date();
    let dateSeconds = date.getSeconds();
    let dateMinutes = date.getMinutes();
    let dateHours = date.getHours();
    let dateSecondsDeg = dateSeconds * 6 + 90;
    let dateMinutesDeg = dateMinutes * 6 + 90;
    let dateHoursDeg = dateHours * 15;
    secondHand.style.transform = `rotate(${dateSecondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${dateMinutesDeg}deg)`;
    hourHand.style.transform = `rotate(${dateHoursDeg}deg)`;
    watch.innerHTML = `${dateHours}:${dateMinutes}:${dateSeconds}`;
  }, 1000);
});
