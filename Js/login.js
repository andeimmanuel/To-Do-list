const email = document.querySelector('form[name="form"] input[name="email"]');
const password = document.querySelector(
  'form[name="form"] input[name="password"]'
);

let email_error = document.getElementById("email-error");
let pass_error = document.getElementById("pass-error");

email.addEventListener("textInput", email_verify);
password.addEventListener("textInput", pass_verify);
event.preventDefault();

function validated() {
  if (email.value.length < 5) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }

  if (password.value.length < 4) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}

function email_verify() {
  if (email.value.length >= 9) {
    email.style.border = "2px solid transparent";
    email_error.style.display = "none";
    return true;
  }
}

function pass_verify() {
  if (password.value.length >= 5) {
    password.style.border = "2px solid transparent";
    pass_error.style.display = "none";
    return true;
  }
}

windows.location.href = "todo.html";
