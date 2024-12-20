let fNameInp = document.querySelector("#fname-inp");
let lNameInp = document.querySelector("#lname-inp");
let emilInp = document.querySelector("#email-inp");

let queryType = document.querySelector(".options");
let fRadio = document.querySelector("#first-radio");
let lRadio = document.querySelector("#last-radio");

let msgInp = document.querySelector("#msg-area");
let checkBox = document.querySelector("#check-box");
let submit = document.querySelector("button");
let success = document.querySelector(".success");

submit.addEventListener('click', () => {
  const valid = validateEmail(emilInp.value);  
  if (fNameInp.value === "") {
    errorInput(fNameInp);
  } else {
    checkError(fNameInp);
  }
  if (lNameInp.value === "") {
    errorInput(lNameInp);
  } else {
    checkError(lNameInp);
  }
  if (emilInp.value === "" || !valid) {
    errorInput(emilInp);
  } else {
    checkError(emilInp);
  }
  if (msgInp.value === "") {
    errorInput(msgInp);
  } else {
    checkError(msgInp);
  }

  if (!fRadio.checked && !lRadio.checked) {
    errorInput(queryType);
  } else {
    checkError(queryType);
  }

  if (!checkBox.classList.contains("checked")) {
    errorInput(checkBox);
  } else {
    checkError(checkBox);
  }

  if (fNameInp.value !== "" && lNameInp.value !== "" && 
  valid && msgInp !== "" && 
  checkBox.classList.contains("checked") &&
  fRadio.checked || lRadio.checked) {
    fNameInp.value = "";
    lNameInp.value = "";
    emilInp.value = "";
    msgInp.value = "";
    checkBox.classList.remove("checked"); 
    checkBox.checked = false;
    if (lRadio.checked) {
      lRadio.checked = false;
    } else {
      fRadio.checked = false;
    }
    success.style.display = "block";
  }
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

fRadio.addEventListener('click', () => {
  lRadio.checked = false;
})
lRadio.addEventListener('click', () => {
  fRadio.checked = false;
})

checkBox.addEventListener('click', () => {
  checkBox.classList.toggle("checked");  
})

function errorInput(input) {
  input.parentElement.classList.add("error");
  input.style.borderColor = "var(--primary-red)";
}

function checkError(input) {  
  if (input.parentElement.classList.contains("error")) {
    input.parentElement.classList.remove("error");
    input.style.borderColor = "var(--medium-grey)";
  }
}

