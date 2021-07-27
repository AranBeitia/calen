
let modalContent = document.getElementById('modal-inner')

function buildLayout(html) {
  modalContent.innerHTML = html;
}

let modalEventHTML = `
  <h2>Create a new event</h2>
  <form id="modal-form">
    <div class="padding-1">
      <label for="name">Title :</label>
      <input
        type="text"
        id="name"
        name="name"
        value=""
        maxlength="60"
        required
      />
    </div>
    <div class="padding-1">
      <label for="startDate">Start Date:</label>
      <span id="pre-select">aaaa</span>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value=""
        required
      />
    </div>
    <div class="padding-1">
      <label for="startTime">Time :</label>
      <input type="time" id="startTime" />
    </div>
    <div class="padding-1">
      <label for="endDate">End Date:</label>
      <input type="checkbox" id="endDate" name="endDate" />
    </div>
    <div id="endDateInput" class="--is-hidden">
      <input type="date" id="endDateInfo" name="endDate" value="" />
      <div>
        <label for="endTime">Time :</label>
        <input type="time" id="endTime" />
      </div>
    </div>
    <div class="padding-1">
      <label for="remind">Remind me when this event expire:</label>
      <input type="checkbox" name="remind" id="remind" />
    </div>
    <div id="remindInput" class="--is-hidden">
      <label for="time">Time :</label>
      <select name="time" id="time">
        <option value="1">1 minutes</option>
        <option value="5">5 minutes</option>
        <option value="10">10 minutes</option>
        <option value="20">20 minutes</option>
        <option value="60">1 hour</option>
      </select>
    </div>
    <div class="padding-1">
      <label for="description">Description: </label>
      <textarea
        name="description"
        id="description"
        rows="4"
        cols="50"
        maxlength="500"
      ></textarea>
    </div>
    <div class="padding-1">
      <label for="eventType">Event type :</label>
      <select name="eventType" id="eventType">
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        <option value="Meeting">Meeting</option>
      </select>
    </div>
    <div class="padding-1">
      <button id="close-modal">Cancel</button>
      <button type="submit">Create</button>
    </div>
  </form>
`

let modalResumeHTML = `
  <h2>Resume of your event</h2>
  <p>Holiiii modal resume</p>
`

export { buildLayout, modalEventHTML, modalResumeHTML };