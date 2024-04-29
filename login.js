let loginform = document.querySelector(".login-form");
let useremail = document.querySelector(".useremail");
let userpassword = document.querySelector(".userpassword");
let submitBtn = document.querySelector(".submitBtn");
/* errors */
let email_error = document.getElementById("email-error");
let pass_error = document.getElementById("pass-error");

// event.preventDefault();

function validateEmail() {
  if (useremail.value.length < 6 && userpassword.value.length < 4) {
    useremail.classList.add("error");
    userpassword.classList.add("error");
    email_error.style.display = "block";
    pass_error.style.display = "block";
  } else if (useremail.value.length >= 6 && userpassword.value.length >= 4) {
    useremail.classList.remove("error");
    userpassword.classList.remove("error");
    email_error.style.display = "none";
    pass_error.style.display = "none";
    document.location.href = "todo.html";
  }
}

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});
