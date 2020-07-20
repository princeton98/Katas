const talkingCalendar = function (date) {
  let month = ""
  const dateArr = date.split('/');
  switch (dateArr[1]) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Februrary"
      break;
    case "03":
      month = "March"
      break;
    case "04":
      month = "April"
      break;
    case "05":
      month = "May"
      break;
    case "06":
      month = "June"
      break;
    case "07":
      month = "July"
      break;
    case "08":
      month = "August"
      break;
    case "09":
      month = "September"
      break;
    case "10":
      month = "October"
      break;
    case "11":
      month = "November"
      break;
    case "12":
      month = "December"
      break;
  }
  return `${month} ${dateArr[2]} ${dateArr[0]}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));