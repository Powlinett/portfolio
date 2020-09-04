document.addEventListener('DOMContentLoaded', () => {
  calculateAge();
  copyContact();
  resetContactContent();
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

const resetContactContent = () => {
  const contacts = document.querySelectorAll('.media-link .content');

  contacts.forEach((contact) => {
    contact.addEventListener('mouseout', (e) => {
      if (e.target.getAttribute('data-after') == 'Copié') {
        e.target.setAttribute('data-after', 'Cliquer pour copier');
      }
    });
  });
};
