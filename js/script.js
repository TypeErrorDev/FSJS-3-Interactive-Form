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
  let jobRoleSelect = document.querySelector("#title");
  let otherJobRoleInput = document.querySelector("#other-job-role");
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
