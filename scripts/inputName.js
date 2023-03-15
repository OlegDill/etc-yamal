let inputName = document.querySelector('.popup-call__input_name');
let reg = /[0-9 a-z A-Z]/g;

inputName.oninput = function () {
  this.value = this.value.replace(reg, '');
}