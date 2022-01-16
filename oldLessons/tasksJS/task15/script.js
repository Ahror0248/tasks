function inner() {
  let inputVal = document.querySelector('.password')
  let iconVal = document.querySelector('.fa-eye-slash')
  let change = inputVal.getAttribute('type') === 'password'? 'text': 'password';
  password.setAttribute('type', change);
  
}

