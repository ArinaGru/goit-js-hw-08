var throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};

const onFormSubmit = e => {
    e.preventDefault();
    
    const { email, message } = e.currentTarget.elements;
    const userData = {
      email: email.value,
      message: message.value,
    };
    console.log(userData);
    
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const onFormInput = e => {
  let persistedData = localStorage.getItem(STORAGE_KEY);
  persistedData = persistedData ? JSON.parse(persistedData) : {};
  persistedData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedData));
};

function fillInputs() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    for (const key in savedData) {
      refs.form.elements[key].value = savedData[key];
    }
  }
}

fillInputs();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
