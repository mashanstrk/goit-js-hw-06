const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const userData = {};

    for (let [name, value] of formData) {
        userData[name] = value;
      }

      if (!userData.email || !userData.password) {
        alert('Заповніть всі поля');
        return;
      }
    
      console.log(userData);
      loginForm.reset();
});
