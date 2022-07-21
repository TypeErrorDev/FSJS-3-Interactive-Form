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
const activities = document.getElementById("activities");
const checkboxes = activities.querySelectorAll("input[type=checkbox]");
let finalCost = document.querySelector("#activities-cost");
let totalCost = 0;

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

activities.addEventListener("change", (e) => {
  let activity = e.target;
  let activity_cost = parseInt(activity.getAttribute("data-cost"));
  let activity_date = activity.dataset.dayAndTime;

  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let checkboxDate = checkbox.dataset.dayAndTime;
    let label = checkbox.parentElement;

    if (checkboxDate === activity_date && checkbox !== activity) {
      if (activity.checked) {
        checkbox.disabled = true;
        label.setAttribute("class", "disabled");
      } else {
        checkbox.disabled = false;
        label.removeAttribute("class", "disabled");
      }
    }
  }

  activity.checked
    ? (totalCost += activity_cost)
    : (totalCost -= activity_cost);

  finalCost.innerHTML = `Total: $ ${totalCost}`;
});

/* ==================================
        PAYMENT INFO SECTION
===================================== */
