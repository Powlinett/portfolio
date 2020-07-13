document.addEventListener('DOMContentLoaded', () => {
  calculateAge();
});

const calculateAge = () => {
  let span = document.querySelector('#age');
  let birthYear = 1993;
  let actualYear = new Date().getFullYear();
  let age = actualYear - birthYear;

  span.innerText = age;
};
