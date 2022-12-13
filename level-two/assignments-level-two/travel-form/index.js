'use strict';

const form = document.travelForm;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const location = form.location.value;
  const dietaryRestrictions = [];
  form.firstName.value = '';
  form.lastName.value = '';
  form.age.value = '';
  form.gender.value = '';

  for (let i = 0; i < form.dietary.length; i++) {
    if (form.dietary[i].checked) {
      dietaryRestrictions.push(' ' + form.dietary[i].value);
    }
  }

  alert(`
    First Name: ${firstName}\n
    Last Name: ${lastName}\n
    Age: ${age}\n
    Gender: ${form.gender.value}\n
    Destination: ${location}\n
    Dietary Restrictions: ${dietaryRestrictions}
  `);
});
