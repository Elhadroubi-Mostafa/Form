
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show Errors
function showError(input, message){
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control error';
  const small = formcontrol.querySelector('small');
  small.innerText = message;
  console.log(formcontrol);
  console.log(small);
}

//show Success
function showSuccess(input){
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control success';
}

//chekEmail
function checkEmail(item){
  const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(item.value.trim())){
    showSuccess(item);
  }
  else{
    showError(item, `${getFieldName(item)} is not valid`);
  }
}

//checkrequired
function checkRequired(inputArr){
  inputArr.forEach(item => {
    if(item.value.trim() === ''){
      showError(item, `${getFieldName(item)} is required`);
    }
    else{
      showSuccess(item);
    }
  });
}

//getFieldName
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//check Length
function checkLength(item, min, max){
  if(item.value.length < min){
    showError(item, `${getFieldName(item)} should be at least ${min} characters`);
  }
  else if(item.value.length > max){
    showError(item, `${getFieldName(item)} should be less than ${max} characters`);
  }
  else{
    showSuccess(item);
  }
}

//checkPasswords Match
function checkPassword(item1, item2){
  if(item1.value === item2.value){
    showSuccess(item1);
    showSuccess(item2);
  }
  else{
    // showError(item1, `${getFieldName(item1)} is not compatible to ${getFieldName(item2)}`);
    showError(item2, `${getFieldName(item2)} is not compatible to ${getFieldName(item1)}`);
  }
}

//Submit form
form.addEventListener('submit', function(event){
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
  // // if(username.value === ''){
  //   showError(username, 'Username is required');
  // }
  // else{
  //   showSuccess(username);
  // }
  // if(email.value === ''){
  //   showError(email, 'email is required');
  // }
  // else if(!isValidEmail(email.value)){
  //   showError(email, 'Email is not valid');
  // }
  // else{
  //   showSuccess(email);
  // }
  // if(password.value === ''){
  //   showError(password, 'password is required');
  // }
  // else{
  //   showSuccess(password);
  // }
  // if(password2.value === ''){
  //   showError(password2, 'Confirm password is required');
  // }
  // else{
  //   showSuccess(password2);
  // }
})