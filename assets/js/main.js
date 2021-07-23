//** CALENDAR */
let calendarTitle = document.getElementById('calendar-title')
let calendar = document.getElementById('calendar')
let arrayMonth = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']
let arrayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let currentDay = today.getDate()
let monthToday = today.getMonth()

let month = document.createElement('span')
let year = document.createElement('span')
function renderMonth() {
  month.textContent = arrayMonth[currentMonth]
  year.textContent = currentYear
  calendarTitle.append(month, year)
}

function renderWeek() {
  arrayWeek.forEach(day => {
    let week = document.createElement('span')
    week.textContent += day
    calendar.appendChild(week)
  })
}

function renderCalendar() {
  renderMonth()
  renderWeek()
  let numberDaysMonth = new Date(currentYear, currentMonth, 0).getDate()
  let firstDay = new Date(currentYear, currentMonth, 0)
  let dayToString = firstDay.toLocaleDateString('en-GB', {
    weekday: 'long'
  })

  let indexOfDay = arrayWeek.indexOf(dayToString)
  for (let i = 0; i <= numberDaysMonth + indexOfDay; i++) {
    let cellHTML = document.createElement('span')
    if (i > indexOfDay) {
      cellHTML.textContent = i - indexOfDay
      if((i - indexOfDay == currentDay) && currentMonth) {
        cellHTML.classList.add('--is-selected')
      }

      if(monthToday !== currentMonth) {
        cellHTML.classList.remove('--is-selected')
      }
    }

    calendar.appendChild(cellHTML)
  }
  // console.log('current month ' + currentMonth);
  // console.log('number days current month ' + numberDaysMonth);
  // console.log(firstDay);
  // console.log('the first day of the current month is: ' + dayToString);
  // console.log(indexOfDay);
}

function changeMonth() {
  let previous = document.getElementById('previous')
  let next = document.getElementById('next')

  previous.addEventListener('click', () => {
    calendar.innerHTML = ''
    currentMonth--
    renderCalendar()
  })

  next.addEventListener('click', () => {
    calendar.innerHTML = ''
    currentMonth++
    renderCalendar()
  })
}


renderCalendar()
changeMonth()
