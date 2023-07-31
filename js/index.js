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
    setTimeout(typeWriter, 300);
  }
}

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

typeWriter();