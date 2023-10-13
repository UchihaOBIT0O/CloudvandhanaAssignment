"use strict";

//inputs
const Firstname = document.getElementById("firstname");
const Lastname = document.getElementById("lastname");
const DateOfBirth = document.getElementById("dateofbirth");
const Country = document.getElementById("country");
const gender = document.querySelectorAll('input[name="gender"]:checked');
const Profession = document.getElementById("profession");
const Email = document.getElementById("email");
const MobileNumber = document.getElementById("phone");
const Male = document.getElementById("male");
const Female = document.getElementById("female");

//buttons
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
////////////////////////////////////////////////////////////////////////////////////
//SUBMIT FUNCTION
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const res = validateForm();
  if (validateForm()) {
    document.getElementById("popup").style.display = "block";

    document.getElementById("popup-first-name").textContent =
      document.getElementById("firstname").value;
    document.getElementById("popup-last-name").textContent =
      document.getElementById("lastname").value;
    document.getElementById("popup-dob").textContent =
      document.getElementById("dateofbirth").value;
    document.getElementById("popup-country").textContent =
      document.getElementById("country").value;
    let selectedGender = Array.from(
      document.querySelectorAll('input[name="gender"]')
    )
      .map((el) => {
        if (el.checked === true) {
          return el.value;
        }
      })
      .join("");
    document.getElementById("popup-gender").textContent = selectedGender;
    document.getElementById("popup-profession").textContent =
      document.getElementById("profession").value;
    document.getElementById("popup-email").textContent =
      document.getElementById("email").value;
    document.getElementById("popup-mobile").textContent =
      document.getElementById("phone").value;
  } else {
    alert("enter all the fields");
  }
});
/////////////////////////////////////////////////////////////////////////////////////
//POPUP BUTTON FUNCTION
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("dateofbirth").value = "";
  document.getElementById("country").value = "";
  Array.from(document.querySelectorAll('input[name="gender"]')).forEach(
    (f) => (f.checked = false)
  );
  document.getElementById("profession").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
});

/////////////////////////////////////////////////////////////////////////////////////////
//FUCNTIONS
function validateForm() {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const dob = document.getElementById("dateofbirth");
  const country = document.getElementById("country");
  const gender = document.querySelectorAll('input[name="gender"]:checked');
  const profession = document.getElementById("profession");
  const email = document.getElementById("email");
  const mobile = document.getElementById("phone");

  let isValid = true;

  if (!firstName.value) {
    isValid = false;
  }

  if (!lastName.value) {
    isValid = false;
  }

  if (!dob.value) {
    isValid = false;
  }

  if (country.value === "") {
    isValid = false;
  }

  if (gender.length === 0) {
    isValid = false;
  }

  if (!profession.value) {
    isValid = false;
  }

  if (!email.value || !validateEmail(email.value)) {
    isValid = false;
  }

  if (!mobile.value || !validateMobile(mobile.value)) {
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

function validateMobile(mobile) {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}
