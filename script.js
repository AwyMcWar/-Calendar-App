const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

//getting new date, month and year
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  //getting the first day of the month
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  //getting the last day of the month
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  //getting last day of month
  let lastDayOfMonth = new Date(
    currYear,
    currMonth,
    lastDateOfMonth,
    0
  ).getDay();
  //getting last date of prev month
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    //li of prev day of month
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    //li with current days
    //adding active class to currDay
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    //li with next day of month
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      //adding months for next year
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
