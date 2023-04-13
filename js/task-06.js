const input = document.getElementById('validation-input');
  const length = input.getAttribute('data-length');

  input.addEventListener('blur', () => {
    const text = input.value;
    if (Number(text.length) === Number(length)) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });




