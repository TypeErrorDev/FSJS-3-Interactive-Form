/////////////////////////////////////////////////////////////////
/////////////// FOCUS ON NAME INPUT ON PAGE LOAD ////////////////
/////////////////////////////////////////////////////////////////

function focusOnNameInputOnLoad() {
  const nameFocus = document.querySelector("#name");
  nameFocus.focus();
}
focusOnNameInputOnLoad();

/////////////////////////////////////////////////////////////////
/////////////// HIDING THE OTHER JOB ROLE FIELD /////////////////
/////////////////////////////////////////////////////////////////

function hideOtherJobRole() {
  const jobRoleSelect = document.querySelector("#title");
  const otherJobRoleInput = document.querySelector("#other-job-role");
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
/////////////// HIDING THE OTHER JOB ROLE FIELD /////////////////
/////////////////////////////////////////////////////////////////
function tshirtOptionsSelection() {
  const designSelect = document.querySelector("#design");

  const colorSelect = document.querySelector("#color");

  designSelect.addEventListener("change", (e) => {});
}
tshirtOptionsSelection();
