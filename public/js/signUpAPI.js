const registerButton = document.querySelector('#register');

registerButton.addEventListener('click', async () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // clear previous validation messages if there are any
  document.querySelector('.validation').innerText = '';

  // check is email is in valid format
  if (!email.includes('@') || !email.includes('.') || email.length < 5) {
    document.querySelector('.validation').innerText = 'Please enter valid email: example@example.com';
    return null;
  }

  // check the password length
  if (password.length < 4 || password.length > 20) {
    document.querySelector('.validation').innerText = 'Password must be between 4 and 20 characters';
    return null;
  }

  const body = new FormData();
  body.append('email', email);
  body.append('password', password);

  const responseRow = await fetch(document.URL, {
    method: 'POST',
    body,
  }).then((response) => response.json()).catch(console.error);

  const content = await responseRow;

  // if user entered valid data, redirect to lobby page
  if (content.success) {
    window.location.href = '/signin';
  }
  // if user entered invalid data, show validation error message
  if (content.error) {
    document.querySelector('.validation').innerText = content.error;
    return null;
  }
});
