window.onload = function () {
  let now = new Date(); // 현재시간과 날짜정보가 저장됨
  let month = document.querySelector("#month");
  let date = document.querySelector("#date");
  let day = document.querySelector("#day");
  let hour = document.querySelector("#hour");
  let minute = document.querySelector("#minute");
  let second = document.querySelector("#second");
  let hours = now.getHours(); //0부터 23 시간을 return
  let minutes = now.getMinutes(); //0부터 59분을 return
  let clock = document.querySelector(".clock");
  if (getDayOrNight() == "낮") {
    //day클래스 night클래스 삭제
    //day클래스 추가
    clock.classList.remove("day");
    clock.classList.remove("night");
    clock.classList.add("day");
  } else {
    clock.classList.remove("day");
    clock.classList.remove("night");
    clock.classList.add("night");
    //day클래스 night클래스 삭제
    //night클래스 추가
  }

  let monthArray = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  let dayArray = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

  //1초마다 현재시간 날짜정보를 span에 갱신
  let clockTimer = setInterval(function () {
    let now = new Date();
    month.innerHTML = monthArray[now.getMonth()];
    date.innerHTML = getDayWithSuffix(now.getDate());
    day.innerHTML = dayArray[now.getDay()];
    hour.innerHTML =
      now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    minute.innerHTML =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    second.innerHTML =
      now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    let clock = document.querySelector(".clock");
    if (getDayOrNight() == "낮") {
      //day클래스 night클래스 삭제
      //day클래스 추가
      clock.classList.remove("day");
      clock.classList.remove("night");
      clock.classList.add("day");
    } else {
      clock.classList.remove("day");
      clock.classList.remove("night");
      clock.classList.add("night");
      //day클래스 night클래스 삭제
      //night클래스 추가
    }
  }, 1000);
};
