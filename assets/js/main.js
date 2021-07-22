//** CALENDAR */
let calendar = document.getElementById('calendar')
let arrayMonth = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']
let arrayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()

let numberDaysMonth = new Date(currentYear, currentMonth, 0).getDate()
let firstDay = new Date(currentYear, currentMonth, 1)
let dayToString = firstDay.toLocaleDateString('en-GB', {
  weekday: 'long'
})

let indexOfDay = arrayWeek.indexOf(dayToString)
for (let i = 0; i <= (numberDaysMonth + indexOfDay); i++) {
  let cellHTML = document.createElement('span')
  if (i > indexOfDay) {
    cellHTML.textContent = i - indexOfDay
  }
  console.log(cellHTML);
  calendar.appendChild(cellHTML)
}

console.log('current month ' + currentMonth);
console.log('number days current month ' + numberDaysMonth);
console.log(firstDay);
console.log('the first day of the current month is: ' + dayToString);
console.log(indexOfDay);
