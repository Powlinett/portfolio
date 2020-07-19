document.addEventListener('DOMContentLoaded', () => {
  calculateAge();
  copyContact();
});

const calculateAge = () => {
  let span = document.querySelector('#age');
  let birthYear = 1993;
  let actualYear = new Date().getFullYear();
  let age = actualYear - birthYear;

  span.innerText = age;
};

const copyContact = () => {
  const contacts = document.querySelectorAll('.media-link .content');

  contacts.forEach((contact) => {
    contact.addEventListener('click', (e) => {
      let input = document.createElement("input");
      input.name = 'clipboard';
      input.style.opacity = "0";
      document.body.appendChild(input);

      input.type = "text";
      input.value = e.target.innerText;
      input.select();
      document.execCommand("copy");

      let copiedInput = document.querySelector("input[name='clipboard']");
      copiedInput.remove();
      e.target.setAttribute('data-after', 'Copié');
    });
  });
};
