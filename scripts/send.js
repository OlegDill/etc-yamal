import { formValidate } from "./formValidation.js";
export let formError = 1;

document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('.popup-call__form');

  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
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
      console.log(formError)

    }
  }
  formValidate();
});