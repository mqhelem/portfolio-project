function contactFeedback(event){
    event.preventDefault()
  let names = document.querySelector("#names");
  let email = document.querySelector("#email");
  let enquiry = document.querySelector("#enquiry");
  if (names.length && email.length && enquiry.length) {
    alert(
      "Thank you for submitting an enquiry, one of our Consultants will get back to you"
    );
  }
}
let btn submit = document.querySelector(".submit")
btn submit.addEventListener("click, contactFeedback")