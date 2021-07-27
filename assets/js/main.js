/** CALENDAR */
let calendarTitle = document.getElementById('calendar-title')
let calendar = document.getElementById('calendar')
let arrayWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let currentDay = today.getDate()
let monthToday = today.getMonth()

function renderMonth() {
  calendarTitle.textContent = new Date(currentYear, currentMonth).toLocaleString('en', { month: 'long', year: 'numeric'})
}

function renderWeek() {
  arrayWeek.forEach(day => {
    let week = document.createElement('span')
    week.classList.add('calendar__week-day')
    week.textContent += day
    calendar.appendChild(week)
  })
}

function renderCalendar() {
  renderMonth()
  renderWeek()
  let numberDaysMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  let firstDay = new Date(currentYear, currentMonth, 0)
  let dayToString = firstDay.toLocaleDateString('en-GB', {
    weekday: 'long'
  })

  let indexOfDay = arrayWeek.indexOf(dayToString)

  for (let i = 0; i <= numberDaysMonth + indexOfDay; i++) {
    let cellHTML = document.createElement('span')
    cellHTML.classList.add('calendar__day')
    if (i > indexOfDay) {
      cellHTML.textContent = i - indexOfDay
      if((i - indexOfDay == currentDay) && currentMonth) {
        cellHTML.classList.add('--is-selected')
      }

      if(monthToday !== currentMonth) {
        cellHTML.classList.remove('--is-selected') // new Date()
      }
    }

    calendar.appendChild(cellHTML)
  }
}

let previous = document.getElementById('previous')
let next = document.getElementById('next')

previous.addEventListener('click', () => changeMonth(-1))
next.addEventListener('click', () => changeMonth(1))

function changeMonth(value) {
  calendar.innerHTML = ''
  currentMonth += value
  renderCalendar()
}

renderCalendar()
