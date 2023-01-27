import throttle from 'lodash.throttle';

const formEl = document.querySelector('form.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');
const dataForm = {};
const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput, 500));
window.addEventListener('DOMContentLoaded', onFillFormSavedData);

function onTextInput(evt) {
  if (evt.target.name === 'email') {
    dataForm.email = evt.target.value;
  } else if (evt.target.name === 'message') {
    dataForm.message = evt.target.value;
  }
  saveLocalStorage(LOCALSTORAGE_FORM_KEY, dataForm);
}

function onFillFormSavedData() {
  const dataSaveForm = loadLocalStorage(LOCALSTORAGE_FORM_KEY);
  if (dataSaveForm) {
    inputEl.value = dataSaveForm.email;
    textareaEl.value = dataSaveForm.message;
    dataForm.email = dataSaveForm.email;
    dataForm.message = dataSaveForm.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(dataForm);
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_FORM_KEY);
}

function saveLocalStorage(key, value) {
  try {
    const dataFormJSON = JSON.stringify(value);
    localStorage.setItem(key, dataFormJSON);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function loadLocalStorage(key) {
  try {
    const dataFormJSON = localStorage.getItem(key);
    return dataFormJSON === null ? undefined : JSON.parse(dataFormJSON);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
