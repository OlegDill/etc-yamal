// import { formValidate } from "./formValidation.js";

// 'use strict'
document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('.popup-call__form');
  let buttonSubmit = document.querySelector('.popup-call__button-submit');
  let popupInputNumber = document.querySelector('.popup-call__input_number');
  let popupInputName = document.querySelector('.popup-call__input_name');
  let popupCheckbox = document.querySelector('.popup-call__checkbox');
  let formError = 1;

  form.addEventListener('submit', formSend);
  popupInputName.addEventListener('input', formValidate);
  popupInputNumber.addEventListener('input', formValidate);
  popupCheckbox.addEventListener('change', formValidate);

  async function formSend(e) {
    e.preventDefault();
    // let error = formValidate();
    let formData = new FormData(form);

    if (formError === 0) {
      form.classList.add('popup-call__form_sending');
      let response = await fetch('../sendMail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('popup-call__form_sending');
      } else {
        alert('Ошибка');
        form.classList.remove('popup-call__form_sending');
      }
    } else {
      alert('Заполните обязательные поля')
    }
  }

  function formValidate() {
    if ((popupInputName.value.length >= 2) && (popupCheckbox.checked === true) && (popupInputNumber.value.length >= 17)) {
      formRemoveError();
    } else {
      formAddError();
    }
  }

  function formAddError() {
    buttonSubmit.classList.remove('popup-call__button-submit_active');
    if (buttonSubmit.hasAttributes('disabled') === false) {
      buttonSubmit.setAttribute('disabled');
    }
  }

  function formRemoveError() {
    buttonSubmit.classList.add('popup-call__button-submit_active');
    if (buttonSubmit.hasAttributes('disabled') === true) {
      buttonSubmit.removeAttribute('disabled');
    }
  }
});