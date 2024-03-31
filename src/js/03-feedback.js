import throttle from "lodash.throttle";

const inputKey = "feedback-form-state";
const form = {
    email:  JSON.parse(localStorage.getItem(inputKey)) ? JSON.parse(localStorage.getItem(inputKey)).email :   "",
    message: JSON.parse(localStorage.getItem(inputKey)) ? JSON.parse(localStorage.getItem(inputKey)).message :   "",
};

const feedback = document.querySelector(".feedback-form");
feedback.addEventListener("input", throttle(onInput, 500));
feedback.addEventListener("submit", onSubmit);


feedback.email.value = form.email;
feedback.message.value = form.message;

function onInput(evt) {
     evt.preventDefault();
    if (evt.target.name === "email") {
        form.email = evt.target.value;
    }
    if (evt.target.name === "message") {
        form.message = evt.target.value;
    }
    localStorage.setItem(inputKey, JSON.stringify(form));
    
};

function onSubmit(evt) {
    evt.preventDefault();
    console.log(form);
    localStorage.removeItem(inputKey)
    feedback.email.value = "";
    feedback.message.value = "";
};

