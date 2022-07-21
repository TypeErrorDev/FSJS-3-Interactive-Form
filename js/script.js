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
const activities = document.getElementById("activities-box");
const checkboxes = activities.querySelectorAll("input[type=checkbox]");
let finalCost = document.querySelector("#activities-cost");
let totalCost = 0;
// Payment
const paypalSelection = document.getElementById("paypal");
const bitcoinSelection = document.getElementById("bitcoin");
const paymentSelection = document.getElementById("payment");
const creditCard = paymentSelection[1];
// Form Validation
const nameRegex = /[^a-zA-Z\ ]+/g;
const emailRegex = /^[^\@]+@[^\@]+\.[^\@]+$/;
const formValidation = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const emailHint = document.getElementById("email-hint");
// CC Validation
const ccInput = document.getElementById("cc-num");
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");
const ccRegex = /^[0-9]{13,16}$/;
const zipRegex = /^[0-9]{5}$/;
const cvvRegex = /^[0-9]{3}$/;

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

  finalCost.innerHTML = `Total: $${totalCost}`;
});

/* ==================================
        PAYMENT INFO SECTION
===================================== */
function paymentDefaults() {
  if ((creditCard.selected = true)) {
    paypalSelection.classList.add("hidden");
    bitcoinSelection.classList.add("hidden");
  }
}
paymentDefaults();
paymentSelection.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "credit-card") {
    paypalSelection.classList.add("hidden");
    bitcoinSelection.classList.add("hidden");
  } else if (e.target.value === "paypal") {
    paypalSelection.classList.remove("hidden");
    bitcoinSelection.classList.add("hidden");
  } else if (e.target.value === "bitcoin") {
    paypalSelection.classList.add("hidden");
    bitcoinSelection.classList.remove("hidden");
  }
});

/* ==================================
        FORM VALIDATION SECTION
===================================== */
function isNameValid() {
  let name = nameInput.value;
  return nameRegex.test(name);
}
function isEmailValid() {
  let email = emailInput.value;
  return emailRegex.test(email);
}
function isActivitiesValid() {
  finalCost === 0 ? false : true;
}
function isCreditCardValid() {
  let cc = ccInput.value;
  return ccRegex.test(cc);
}
function isZipValid() {
  let zip = zipInput.value;
  return zipRegex.test(zip);
}
function isCVVValid() {
  let cvv = cvvInput.value;
  return cvvRegex.test(cvv);
}
function isNotValid(arg) {
  arg.parentNode.classList.add("not-valid");
  arg.parentNode.classList.remove("valid");
  arg.parentNode.lastElementChild.style.display = "block";
}
function isValid(arg) {
  arg.parentNode.classList.add("valid");
  arg.parentNode.classList.remove("not-valid");
  arg.parentNode.lastElementChild.style.display = "none";
}
formValidation.addEventListener("keyup", (e) => {
  if (!isNameValid()) {
    e.preventDefault();
    isNotValid(nameInput);
  } else {
    isValid(nameInput);
  }
});
formValidation.addEventListener("submit", (e) => {
  if (!isNameValid()) {
    e.preventDefault();
    isNotValid(nameInput);
  } else {
    isValid(nameInput);
  }
  if (!isEmailValid()) {
    e.preventDefault();
    let email = emailInput.value;
    if (email === "") {
      emailHint.textContent = `Email field is empty, please enter a valid email address.`;
    } else if (/^\w+@\w+.\w+$/.test(email) === false) {
      emailHint.textContent = `Your email address is missing the "@" symbol.`;
    } else {
      emailHint.textContent = `Email address is formatted incorrectly`;
    }
  } else {
    isValid(emailInput);
  }
  if (!isActivitiesValid()) {
    e.preventDefault();
    isNotValid(activities);
  } else {
    isValid(activities);
  }
});
