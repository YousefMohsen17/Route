// Login box variables
var loginContainer = document.querySelector(".login-box");
var signInEmail = document.querySelector("#sign-in-email");
var signInPass = document.querySelector("#sign-in-password");
var loginBtn = document.querySelector(".login-btn");
var loginMessage = document.querySelector(".login-message");
// ****
// Signup box variables
var signUpContainer = document.querySelector(".signup-box");
var signUpEmail = document.querySelector("#sign-up-email");
var signUpName = document.querySelector("#sign-up-name");
var signUpPass = document.querySelector("#sign-up-password");
var signUpBtn = document.querySelector(".sign-up-btn");
var signUpMessage = document.querySelector(".signup-message");
// ****
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
const navSignIn = document.querySelector(".mynav");
function clearLogin() {
  signInEmail.value = "";
  signInPass.value = "";
}
function clearSignup() {
  signUpEmail.value = "";
  signUpName.value = "";
  signUpPass.value = "";
}
function handleSignInAndUpClick() {
  signUpContainer.classList.toggle("d-none");
  loginContainer.classList.toggle("d-none");
  signUpMessage.innerHTML = "";
  loginMessage.innerHTML = "";
  clearLogin();
  clearSignup();
}
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function signupValidation(email, name, password) {
  if (email === "" || name === "" || password === "") {
    signUpMessage.classList.add("text-danger");
    signUpMessage.innerHTML = "Please fill in all fields.";
    return false;
  }
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email) {
      signUpMessage.classList.add("text-danger");
      signUpMessage.innerHTML =
        "Email already exists. Please use a different email.";
      return false;
    }
  }
  if (!isValidEmail(email)) {
    signUpMessage.classList.add("text-danger");
    signUpMessage.innerHTML = "Please enter a valid email address.";
    return false;
  }
  return true;
}
function createAccount(e) {
  e.preventDefault();
  var email = signUpEmail.value;
  var name = signUpName.value;
  var password = signUpPass.value;
  var newAccount = {
    email: email,
    name: name,
    password: password,
  };
  if (!signupValidation(email, name, password)) return;
  accounts.push(newAccount);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  signUpMessage.classList.remove("text-danger");
  signUpMessage.innerHTML = "Account Created Successfully ✅";
  clearSignup();
}
function loginValidation(email, password, loggedIn) {
  if (email === "" || password === "") {
    loginMessage.innerHTML = "Please fill in all fields.";
    return false;
  }
  if (!loggedIn) {
    loginMessage.innerHTML = "Invalid email or password.";
    return false;
  }

  return true;
}
function handleLogin(e) {
  var loggedIn = false;
  e.preventDefault();
  var email = signInEmail.value;
  var password = signInPass.value;
  var heading = document.querySelector(".welcome-message");
  for (var i = 0; i < accounts.length; i++) {
    if (email === accounts[i].email && password === accounts[i].password) {
      navSignIn.classList.remove("d-none");
      loginContainer.classList.add("d-none");
      heading.innerHTML = `Welcome ${accounts[i].name} `;
      loggedIn = true;
      break;
    }
  }
  if (!loginValidation(email, password, loggedIn)) return;
}

function handleLogout() {
  loginMessage.classList.add("d-none");
  navSignIn.classList.add("d-none");
  loginContainer.classList.remove("d-none");
  clearLogin();
}
signUpBtn.addEventListener("click", createAccount);
loginBtn.addEventListener("click", handleLogin);
