function contactFeedback() {
  let names = document.querySelector("#names");
  let email = document.querySelector("#email");
  let enquiry = document.querySelector("#enquiry");
  if (names.length & email.length & enquiry.length) {
    alert(
      "Thank you for submitting an enquiry, one of our Consultants will get back to you"
    );
  } else {
    alert("We need you to input all your details");
  }
}
let button = document.querySelector("button");
button.addEventListener("click", contactFeedback);
