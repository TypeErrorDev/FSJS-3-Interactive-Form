/* ==================================
              VARIABLES
===================================== */
// nameFocus
const nameFocus = document.querySelector("#name");
// Job Role
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role");
// T-Shirt selections
const designSelect = document.querySelector("#design");
const colorSelect = document.querySelector("#color");
const colorOption = colorSelect.children;
// Activities
const activitiesBox = document.getElementById("activities-box");
const activitiesCheckbox = document.querySelectorAll('[type="checkbox"]');
const totalCost = document.getElementById("activities-cost");

/* ==================================
    FOCUS ON NAME INPUT ON PAGE LOAD
===================================== */
nameFocus.focus();

/* ==================================
    OTHER JOB ROLE DISABLED ON LOAD
===================================== */

otherJobRoleInput.style.display = "none";

/* ==================================
    HIDING THE OTHER JOB ROLE FIELD
===================================== */

jobRoleSelect.addEventListener("change", (e) => {
  e.target.value === "other"
    ? (otherJobRoleInput.style.display = "initial")
    : (otherJobRoleInput.style.display = "none");
});

/* ==================================
    T-SHIRT SELECT BOX INTERACTION
===================================== */

// T-Shirt Select Options
function tshirtColorSelections() {
  colorSelect.disabled = true;
  designSelect.addEventListener("change", (e) => {
    colorSelect.disabled = false;
    for (let i = 0; i < colorOption.length; i++) {
      let selection = e.target.value;
      let theme = colorOption[i].getAttribute("data-theme");
      if (selection === theme) {
        colorOption[i].hidden = false;
        colorOption[i].selected = true;
      } else {
        colorOption[i].hidden = true;
        colorOption[i].selected = false;
      }
    }
  });
}
tshirtColorSelections();

/* ==================================
    ACTIVITIES TOTAL COST UPDATE
===================================== */

// declare variables of the event data-day-and-time attribute
const dateInputs = document.querySelector(`[type="checkbox"]`);
// const dateAndTime = dateInputs.getAttribute("data-date-and-time");

// declare variables of the event data-cost attribute
const cbDataCosts = dateInputs.getAttribute("data-cost");

function compareDatesAndTimes() {
  // loop through each input in the fieldset by "data-day-and-time" attribute
  // if one event's date and time is the same as another selection, dont allow the selection
  // if its not the same.......allow the selection?? need to figure out this wording better Matt, come on dude
}

function addCosts() {
  // loop through each checkbox class="activity-cost"
  // if activityCheckbox.is(":checked")
  // totalCost += innerText
}

activitiesBox.addEventListener("change", (e) => {
  const total = totalCost;
  let price = 0;
  const selectedEvents = e.target;
  activitiesCheckbox.forEach((field) => {
    let label = field.parentElement;
    console.log(label);
  });

  // on change, run the compareDatesAndTimes function
  // run addCosts function and update price variable
  // should be it? just need to figure out the first two functions :(
});
