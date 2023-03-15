'use strict'
let buttonSubmit = document.querySelector('.popup-call__button-submit');

document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('.popup-call__form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('popup-call__form_sending');
      let response = await fetch('sendmail.php', {
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

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelector('._req');

    for (let index = 0; ondex < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classlist.contains());
    }
  }
  function formAddError() {
    buttonSubmit.classlist.remove('popup-call__button-submit_active');
    buttonSubmit.setAttribute('disabled');
  }
  function formRemoveError() {
    buttonSubmit.classlist.add('popup-call__button-submit_active');
    buttonSubmit.removeAttribute('disabled');
  }
});