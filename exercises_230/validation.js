document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let mainForm = document.getElementById('main_form');
  let formMessage = document.getElementById('form_message');
  let container = document.querySelector('.container');
  let alphaInputs = document.querySelectorAll('.alpha_input');
  let phoneInput = document.getElementById('phone');
  let creditInputs = document.querySelectorAll('.credit_input');
  let queryHeader = document.querySelector('h2');
  let queryMessage = document.getElementById('query_string');

  mainForm.addEventListener('focusin', (e) => {
    if (e.target.id !== 'submit') {
      e.target.nextElementSibling.textContent = '';
      e.target.classList.remove('invalid');  
    }
  })

  mainForm.addEventListener('focusout', (e) => {
    let input = e.target;
    let message = input.nextElementSibling;

    if (form.checkValidity()) {
      formMessage.textContent = '';
      container.classList.remove('invalid_form');
    }

    if (input.validity.valueMissing) {
      message.textContent = 'This field is required.'
      input.classList.add('invalid');
    } else if (input.validity.patternMismatch) {
      message.textContent = `Please use valid ${input.name} formatting.`
      input.classList.add('invalid');
    } else if (input.validity.tooShort) {
      message.textContent = 'Password must be 10 characters or longer.'
      input.classList.add('invalid');
    } else if (input.validity.tooLong) {
      documen
    }
  })

  form.addEventListener('submit', (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      formMessage.textContent = 'Fix errrors before submitting.'
      container.classList.add('invalid_form')
    } else {
      e.preventDefault();
      let formData = new FormData(form);
      let entries = [...formData.entries()];
      let queryString = parseArray(entries);
      queryHeader.textContent = 'Serialized Form:';
      queryMessage.textContent = queryString;
    }
  })

  alphaInputs.forEach(ele => ele.addEventListener('keypress', alphaValidation));

  function alphaValidation(e) {
    if (!/[a-zA-Z'\s]/.test(e.key)) {
      e.preventDefault();
    }
  }

  phoneInput.addEventListener('keypress', (e) => {
    if (!/[\d-]/.test(e.key)) {
      e.preventDefault();
    }
  });

  creditInputs.forEach(ele => ele.addEventListener('keypress', creditValidation));
  Array.from(creditInputs).slice(0, 3).forEach(ele => ele.addEventListener('input', handleNext));

  function creditValidation(e) {
    if (!/[\d-]/.test(e.key)) {
      e.preventDefault();
    }
  }

  function handleNext(e) {
    if (e.target.value.length === 4) {
      e.target.nextElementSibling.focus();
    }
  }

  function parseArray(entries) {
    let query = [];
    let standardEntries = entries.filter(ele => ele[0] !== 'credit_card');
    let creditEntries = entries.filter(ele => ele[0] === 'credit_card');

    standardEntries.forEach((ele) => {
      let key = encodeURIComponent(ele[0]);
      let value = encodeURIComponent(ele[1]);
      query.push(`${key}=${value}`);
    });

    let creditString = creditEntries.reduce((acc, curr) => acc + curr[1], 'credit_card=');

    return query.join('&').concat('&', creditString);
  }
})