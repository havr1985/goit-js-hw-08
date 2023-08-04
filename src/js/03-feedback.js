import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(userInput, 500));
form.addEventListener('submit', onSubmit);

const KEY_INPUT = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(KEY_INPUT)) || {};

chekIputs();

function userInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY_INPUT, JSON.stringify(formData));
};

function chekIputs() {
    const { email, message } = form.elements;
    if (formData) {
        email.value = formData.email || "";
        message.value = formData.message || "";
    }
}

function onSubmit(event) {
    event.preventDefault();
    if (!(form.email.value) || !(form.message.value)) {
        alert("Не всі поля заповнені!!!");
        return;
    };
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(KEY_INPUT);
    formData = {};
}