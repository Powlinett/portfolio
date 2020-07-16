document.addEventListener('DOMContentLoaded', () => {
  calculateAge();
  setBackgroundHeight();
});

const calculateAge = () => {
  let span = document.querySelector('#age');
  let birthYear = 1993;
  let actualYear = new Date().getFullYear();
  let age = actualYear - birthYear;

  span.innerText = age;
};

const setBackgroundHeight = () => {
  let body = document.querySelector('body');
  let background = document.querySelector('.background-shapes');
  let height = getComputedStyle(body).height;

  background.style.height = height;
};
