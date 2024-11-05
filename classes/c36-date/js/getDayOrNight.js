function getDayOrNight() {
    let now = new Date();
    let hours = now.getHours(); //0부터 23 시간을 return
    let minutes = now.getMinutes(); //0부터 59분을 return
    if (
      (hours > 9 && hours < 18) ||
      (hours == 9 && minutes >= 40) ||
      (hours == 18 && minutes < 5)
    ) {
      return "낮";
    } else {
      return "밤";
    }
  }