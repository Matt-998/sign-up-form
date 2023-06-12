const form = document.getElementById("sign-up-form");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const passwordError = document.getElementById("bad-password");
const passwordMatch = document.getElementById("password-match");
const regex = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

// Remove invalid class from field on focus
password.addEventListener("focus", (e) => {
  passwordError.classList.remove("bad-password");
  password.classList.remove("password-invalid");
});

password2.addEventListener("focus", (e) => {
  passwordMatch.classList.remove("bad-password");
  password2.classList.remove("password-invalid");
});

// Check for invalid password, add invalid class, prevent submission
password.addEventListener("blur", (e) => {
  if (password.value.match(regex)) {
    passwordError.classList.add("bad-password");
    password.classList.add("password-invalid");
    e.preventDefault();
  }
});

// Check password match, add invalid class, prevent submission
password2.addEventListener("blur", (e) => {
  if (password.value !== password2.value) {
    passwordMatch.classList.add("bad-password");
    password2.classList.add("password-invalid");
    e.preventDefault();
  }
});

// Prevent submission
form.addEventListener("submit", (e) => {
  if (password.value !== password2.value) {
    passwordMatch.classList.add("bad-password");
    e.preventDefault();
  }
  if (password.value.match(regex)) {
    e.preventDefault();
  }
});
