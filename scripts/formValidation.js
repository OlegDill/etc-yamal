import { formError } from "./send.js";

let buttonSubmit = document.querySelector('.popup-call__button-submit');
let popupInputNumber = document.querySelector('.popup-call__input_number');
let popupInputName = document.querySelector('.popup-call__input_name');
let popupCheckbox = document.querySelector('.popup-call__checkbox');

popupInputName.addEventListener('input', formValidate);
popupInputNumber.addEventListener('input', formValidate);
popupCheckbox.addEventListener('change', formValidate);

export function formValidate() {
  if ((popupInputName.value.length >= 2) && (popupCheckbox.checked === true) && (popupInputNumber.value.length >= 17)) {
    formRemoveError();
  } else {
    formAddError();
  }
}

function formAddError() {
  buttonSubmit.classList.remove('popup-call__button-submit_active');
  buttonSubmit.setAttribute('disabled');
  formError++;
  console.log(formError)
}

function formRemoveError() {
  buttonSubmit.classList.add('popup-call__button-submit_active');
  buttonSubmit.removeAttribute('disabled');
  formError = 0;
  console.log(formError)
}