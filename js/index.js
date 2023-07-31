// When the user clicks on div, Toggle Hide and show

const element = document.getElementById('mobile_navbar');
function menu_icon() {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}
element.addEventListener('click', menu_icon);

// This block for Type writer effect on headline section
const heading = ' I am Sharmin , <br/> Glad to see you!';
const hArr = heading.split(' ');
let typeCount = 1;
function typeWriter() {
  if (typeCount < hArr.length) {
    document.querySelector(
      '.type-animation',
    ).innerHTML += ` ${hArr[typeCount]}`;
    typeCount += 1;
    setTimeout(typeWriter, 400);
  }
}

typeWriter();

// form validation section
function validateEmail() {
  const emailInput = document.getElementById('email').value;
  const lowerCaseEmail = emailInput.toLowerCase();

  if (emailInput !== lowerCaseEmail) {
    document.getElementById('errormsg').innerHTML = '*Email must be in lowercase!';
    return false;
  }
  document.getElementById('errormsg').innerHTML = '';
  return true;
}

const submitform = document.getElementById('submit');
submitform.addEventListener('click', () => {
  validateEmail();
});

// local storage section
const storageData = document.querySelectorAll('.contact-form-input');
const localStoreValue = {
  name: '',
  email: '',
  message: '',
};
storageData.forEach((input) => {
  input.addEventListener('input', () => {
    localStoreValue[input.name] = input.value;
    localStoreValue[input.email] = input.value;
    localStoreValue[input.message] = input.value;
    localStorage.setItem('information', JSON.stringify(localStoreValue));
  });
});
const informationStored = JSON.parse(localStorage.getItem('information'));
if (informationStored) {
  storageData.forEach((element) => {
    element.value = informationStored[element.name];
  });
}
