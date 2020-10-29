function unluckyDays(year) {
  // track months (0-11)
  let month;
  //   keep count of each Friday the 13th
  let count = 0;
  //   
  let date = new Date();
  for (month = 0; month < 12; month++) {
    //   the day needs to be a Friday(5) and land on the 13th of the month
    date.setFullYear(year, month, 13);
    if (date.getDay() === 5) {
      count++
    }
  }

  return count;
}
