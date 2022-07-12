const nameFocus = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role");
const designSelect = document.querySelector("#design");
const colorSelect = document.querySelector("#color");
const colorOption = colorSelect.children;

/////////////////////////////////////////////////////////////////
/////////////// FOCUS ON NAME INPUT ON PAGE LOAD ////////////////
/////////////////////////////////////////////////////////////////

function focusOnNameInputOnLoad() {
  nameFocus.focus();
}
focusOnNameInputOnLoad();

/////////////////////////////////////////////////////////////////
/////////////// HIDING THE OTHER JOB ROLE FIELD /////////////////
/////////////////////////////////////////////////////////////////

function hideOtherJobRole() {
  otherJobRoleInput.style.display = "none";

  jobRoleSelect.addEventListener("change", (e) => {
    if (e.target.value === "other") {
      otherJobRoleInput.style.display = "inline-block";
    } else {
      otherJobRoleInput.style.display = "none";
    }
  });
}
hideOtherJobRole();

/////////////////////////////////////////////////////////////////
//////////////// T-SHIRT SELECT BOX INTERACTION /////////////////
/////////////////////////////////////////////////////////////////

// T-Shirt Select Options
function tshirtOptionsSelection() {
  colorSelect.disabled = true;
  designSelect.addEventListener("change", (e) => {
    if (designSelect.value == "js puns") {
      colorSelect.disabled = false;
      colorOption[4].disabled = true;
      colorOption[5].disabled = true;
      colorOption[6].disabled = true;
    } else {
      colorSelect.disabled = false;
      colorOption[1].disabled = true;
      colorOption[2].disabled = true;
      colorOption[3].disabled = true;
    }
  });
}
tshirtOptionsSelection();
