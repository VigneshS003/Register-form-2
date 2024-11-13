//selecting elements
const firstNameInputEl = document.querySelector("#fname");
const lastNameInputEl = document.querySelector("#lname");
const emailInputEl = document.getElementById("mail");
const passInputEl = document.getElementById("pass");
const repassInputEl = document.getElementById("repass");
const btn_submit = document.getElementById("submit");
const user_firm = document.getElementById("user_from");

//defining event listeners
function from_register() {
  const first_name = firstNameInputEl.value;
  const last_name = lastNameInputEl.value;
  const email = emailInputEl.value;
  const password = passInputEl.value;
  const re_password = repassInputEl.value;
  console.log(first_name);

  if (!first_name) {
    firstNameInputEl.classList.add("error");
    const form_control = firstNameInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("error");
    ValidEl.innerText = "First Name is required";
  } else if (!last_name) {
    firstNameInputEl.classList.add("success");
    lastNameInputEl.classList.add("error");
    const form_control = lastNameInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("error");
    ValidEl.innerText = "Last Name is required";
  } else if (!email) {
    lastNameInputEl.classList.add("success");
    emailInputEl.classList.add("error");
    const form_control = emailInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("error");
    ValidEl.innerText = "Mail is required";
  } else if (!password) {
    emailInputEl.classList.add("success");
    passInputEl.classList.add("error");
    const form_control = passInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("error");
    ValidEl.innerText = "Password is required";
  } else if (!re_password) {
    passInputEl.classList.add("success");
    repassInputEl.classList.add("error");
    const form_control = repassInputEl.parentElement;

    const ValidEl = form_control.querySelector(".valid");

    ValidEl.classList.add("error");
    ValidEl.innerText = "Password is not same";
  } else if (re_password != password) {
    alert("password and Re-Password is not same");
  } else {
    // firstNameInputEl.classList.add("success");
    // lastNameInputEl.classList.add("success");
    // emailInputEl.classList.add("success");
    // passInputEl.classList.add("success");
    repassInputEl.classList.add("success");

    document.getElementById("user_from").innerHTML = "";
    window.location.href = "welcome.html";
  }
}
