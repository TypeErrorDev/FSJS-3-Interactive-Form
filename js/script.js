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
const activitiesBox = document.getElementById("activities");
const activitiesCheckbox = document.querySelectorAll('[type="checkbox"]');
const activitiesCost = document.getElementById("activities-cost");

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

function compareDatesAndTimes() {}

function addCosts() {}

activitiesBox.addEventListener("change", (e) => {
  const total = activitiesCost;
  let price = 0;
  const selectedEvents = e.target;
  activitiesCheckbox.forEach((field) => {
    let label = field.parentElement;
    console.log(label);
  });
});
