const emailInput = document.querySelector("#card-input-email");
let emailInputValue;
const validOrNotSpan = document.querySelector("#valid-or-not");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const form = document.getElementById("form");

function validEmail(e) {
  emailInputValue = e.target.value;
  if (emailInputValue && !emailRegex.test(emailInputValue)) {
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    validOrNotSpan.innerText = "Invalid email❌";
    validOrNotSpan.style.color = "hsl(4, 100%, 67%)";
  } else if (emailInputValue && emailRegex.test(emailInputValue)) {
    emailInput.style.border = "1px solid green";
    emailInput.style.color = "green";
    validOrNotSpan.innerText = "Valid✅";
    validOrNotSpan.style.color = "green";
  }
}

emailInput.addEventListener("blur", validEmail);

function submitNewsletter(e) {
  e.preventDefault();
  if (!emailInputValue) {
    emailInput.focus();
    return alert("Please enter an email address");
  }
  if (!emailRegex.test(emailInputValue)) {
    return alert("Please enter valid email!");
  }
  // window.location.href = "thankyou.html";
  window.location.href = `thankyou.html?email=${encodeURIComponent(
    emailInputValue
  )}`;
}

form.addEventListener("submit", submitNewsletter);
