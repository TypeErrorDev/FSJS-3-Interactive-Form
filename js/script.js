/* ==================================
              VARIABLES
===================================== */

//All of the variables for the site, all in one place :)

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
const allActivities = document.getElementById("activities");
const activityInput = document.querySelectorAll("#activities input");
const activitiesBox = document.getElementById("activities-box");
const checkboxes = activitiesBox.querySelectorAll("input[type=checkbox]");
let finalCost = document.querySelector("#activities-cost");
let totalCost = 0;
// Payment
const paypalSelection = document.getElementById("paypal");
const bitcoinSelection = document.getElementById("bitcoin");
const paymentSelection = document.getElementById("payment");
const creditCardInfo = document.getElementById("credit-card");
const creditCard = paymentSelection[1];
// Form Validation
const formRegistration = document.querySelector(".container");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const emailHint = document.getElementById("email-hint");
const nameRegex = /^[a-zA-Z]+\s?[a-zA-Z]+$/;
const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
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
activitiesBox.addEventListener("change", (e) => {
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

  // this does the math for the totalCost
  activity.checked
    ? (totalCost += activity_cost)
    : (totalCost -= activity_cost);

  finalCost.innerHTML = `Total: $${totalCost}`;
});

//this validates that an activity has been selected
function validateActivity() {
  let count = 0;
  for (let i = 0; i < activityInput.length; i++) {
    if (activityInput[i].checked == true) {
      count += 1;
    }
  }
  if (count !== 0) {
    allActivities.firstElementChild.className = "valid";
    allActivities.lastElementChild.style.display = "none";
    return true;
  } else {
    allActivities.firstElementChild.className = "not-valid";
    allActivities.lastElementChild.style.display = "block";
    return false;
  }
}

// Adding focus to activities for accessibility
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("focus", (e) => {
    e.target.parentElement.classList.add("focus");
  });
  checkboxes[i].addEventListener("blur", (e) => {
    e.target.parentElement.classList.remove("focus");
  });
}
/* ==================================
        PAYMENT INFO SECTION
===================================== */
//This hides the Paypal and bitcoin options if credit card is selected
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
    creditCardInfo.classList.remove("hidden");
  } else if (e.target.value === "paypal") {
    paypalSelection.classList.remove("hidden");
    creditCardInfo.classList.add("hidden");
    bitcoinSelection.classList.add("hidden");
  } else if (e.target.value === "bitcoin") {
    paypalSelection.classList.add("hidden");
    creditCardInfo.classList.add("hidden");
    bitcoinSelection.classList.remove("hidden");
  }
});

/* ==================================
        FORM VALIDATION SECTION
===================================== */
// This validates the name against the nameRegex variable
function validName() {
  if (nameInput.value && nameRegex.test(nameInput.value)) {
    nameInput.parentNode.className = "valid";
    nameInput.parentNode.lastElementChild.style.display = "none";
    return true;
  } else {
    if (nameInput.value) {
      nameInput.parentNode.lastElementChild.textContent =
        "Name cannot contain numbers or punctuation";
    }
    nameInput.parentNode.className = "not-valid";
    nameInput.parentNode.lastElementChild.style.display = "block";
    return false;
  }
}

// This validates the name against the emailRegex variable
function validEmail() {
  if (emailInput.value && emailRegex.test(emailInput.value)) {
    emailInput.parentNode.className = "valid";
    emailInput.parentNode.lastElementChild.style.display = "none";
    return true;
  } else {
    if (emailInput.value) {
      emailInput.parentNode.lastElementChild.textContent =
        "Please format your email address properly";
    } else {
      emailInput.parentNode.lastElementChild.textContent =
        "Email address field cannot be blank";
    }
    emailInput.parentNode.className = "not-valid";
    emailInput.parentNode.lastElementChild.style.display = "block";
    return false;
  }
}

// This validates the name against the ccRegex variable
function validCCNum() {
  if (ccInput.value && ccRegex.test(ccInput.value)) {
    ccInput.parentNode.className = "valid";
    ccInput.parentNode.lastElementChild.style.display = "none";
    return true;
  } else {
    if (ccInput.value) {
      ccInput.parentNode.lastElementChild.textContent =
        "Your credit card number must be 13-16 digits";
    } else {
      ccInput.parentNode.lastElementChild.textContent =
        "Cant leave your credit card number blank, we have to get that bag";
    }
    ccInput.parentNode.className = "not-valid";
    ccInput.parentNode.lastElementChild.style.display = "block";
    return false;
  }
}

// This validates the name against the zipRegex variable
function validZip() {
  if (zipInput.value && zipRegex.test(zipInput.value)) {
    zipInput.parentNode.className = "valid";
    zipInput.parentNode.lastElementChild.style.display = "none";
    return true;
  } else {
    if (zipInput.value) {
      zipInput.parentNode.lastElementChild.textContent =
        "Your zipcode is only supposed to be 5 digits";
    } else {
      zipInput.parentNode.lastElementChild.textContent =
        "Your zipcode cannot be blank";
    }
    zipInput.parentNode.className = "not-valid";
    zipInput.parentNode.lastElementChild.style.display = "block";
    return false;
  }
}

// This validates the name against the cvvRegex variable
function validCVV() {
  if (cvvInput.value && cvvRegex.test(cvvInput.value)) {
    cvvInput.parentNode.className = "valid";
    cvvInput.parentNode.lastElementChild.style.display = "none";
    return true;
  } else {
    if (cvvInput.value) {
      cvvInput.parentNode.lastElementChild.textContent =
        "Your CVV is only supposed to be 3 digits";
    } else {
      cvvInput.parentNode.lastElementChild.textContent =
        "Your CVV cannot be blank";
    }
    cvvInput.parentNode.className = "not-valid";
    cvvInput.parentNode.lastElementChild.style.display = "block";
    return false;
  }
}

/* ==================================
        FORM VALIDATION SECTION
===================================== */
nameInput.addEventListener("keyup", () => {
  validName();
});
emailInput.addEventListener("keyup", () => {
  validEmail();
});
ccInput.addEventListener("keyup", () => {
  validCCNum();
});
zipInput.addEventListener("keyup", () => {
  validZip();
});
cvvInput.addEventListener("keyup", () => {
  validCVV();
});

// prevent registration with any blank/invalid "required" fields
formRegistration.addEventListener("submit", (e) => {
  if (!validName()) {
    e.preventDefault();
  }
  if (!validEmail()) {
    e.preventDefault();
  }
  if (!validateActivity()) {
    e.preventDefault();
  }
  if (paymentSelection.value == "credit-card") {
    if (!validCCNum()) {
      e.preventDefault();
    }
    if (!validZip()) {
      e.preventDefault();
    }
    if (!validCVV()) {
      e.preventDefault();
    }
  }
});
