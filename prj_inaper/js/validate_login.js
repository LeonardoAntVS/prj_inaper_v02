function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function toggleEmailErrors() {
  const email = form.email().value;

  form.emailRequiredError().style.display = email ? "none" : "block" ;
  
  form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

}

function login() {
  window.location.href = "../html/Cadastro.html"
}

function togglePasswordErrors() {
  const password = form.password().value;

  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPasswordButton().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const form = {
  email: () => document.getElementById("input-email"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  password: () => document.getElementById("input-password"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
  loginButton: () => document.getElementById("login-button")
}
