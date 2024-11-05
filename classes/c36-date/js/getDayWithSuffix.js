function getDayWithSuffix(day) {
    if (day > 3 && day < 21) return day + "th"; // Catch 11th-13th
    const suffix = ["th", "st", "nd", "rd"][day % 10] || "th";
    return day + suffix;
  }