const nameFocus = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role");
const designSelect = document.querySelector("#design");
const colorSelect = document.querySelector("#color");
const colorOption = colorSelect.children;

/////////////////////////////////////////////////////////////////
/////////////// FOCUS ON NAME INPUT ON PAGE LOAD ////////////////
/////////////////////////////////////////////////////////////////

nameFocus.focus();

/////////////////////////////////////////////////////////////////
/////////////// HIDING THE OTHER JOB ROLE FIELD /////////////////
/////////////////////////////////////////////////////////////////

function hideOtherJobRole() {
  otherJobRoleInput.style.display = "none";

  jobRoleSelect.addEventListener("change", (e) => {
    if (e.target.value === "other") {
      otherJobRoleInput.style.display = "initial";
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
