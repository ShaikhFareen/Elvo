const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();
  removeSuccess();

  let valid = true;

  valid &= validate("name", "Name required");
  valid &= validateEmail("email");
  valid &= validate("subject", "Subject required");
  valid &= validate("message", "Message required");

  if (valid) {
    showSuccess();
    form.reset();
  }
});

function validate(id, msg) {
  const input = document.getElementById(id);
  if (input.value.trim() === "") {
    triggerError(input, msg);
    return false;
  }
  return true;
}

function validateEmail(id) {
  const input = document.getElementById(id);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(input.value.trim())) {
    triggerError(input, "Invalid email");
    return false;
  }
  return true;
}

function triggerError(input, message) {
  const error = input.parentElement.querySelector(".error");
  error.textContent = message;

  // FORCE animation restart
  input.classList.remove("error-input");
  void input.offsetWidth;
  input.classList.add("error-input");
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.textContent = "");
  document.querySelectorAll("input, textarea").forEach(i => i.classList.remove("error-input"));
}

function showSuccess() {
  removeSuccess(); // remove old message if any

  const msg = document.createElement("div");
  msg.className = "success-message";
  msg.textContent = "Message sent successfully!";

  form.prepend(msg);
}

function removeSuccess() {
  const existing = document.querySelector(".success-message");
  if (existing) existing.remove();
}
