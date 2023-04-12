const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const userData = {
      email: loginForm.elements.email.value,
      password: loginForm.elements.password.value
    };

      if (!userData.email || !userData.password) {
        alert('Заповніть всі поля');
        return;
      }
    
      console.log(userData);
      loginForm.reset();
});
