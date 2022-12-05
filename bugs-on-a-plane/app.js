var form = document['airline-form'];
var submit = document.getElementById('submit');
var query = document.querySelector;
var diet = [];

function formAlert() {
  console.log('hello');
  var firstName = form.elements['first-name'].value;
  var lastName = form.elements['last-name'].value;
  var age = form.elements['age'].value;
  var gender = form.elements['gender'].value;
  var location = form.elements['travel-location'].value;

  if (form.elements['vegan'].checked) {
    diet.push(document.getElementById('vegan').value);
  }
  if (form.elements['gluten'].checked) {
    diet.push(document.getElementById('gluten').value);
  }
  if (form.elements['paleo'].checked) {
    diet.push(document.getElementById('paleo').value);
  }

  alert(
    'First Name: ' +
      firstName +
      '\nLast Name: ' +
      lastName +
      '\nAge: ' +
      age +
      '\nGender: ' +
      gender +
      '\nTravel Location: ' +
      location +
      '\nDiet: ' +
      diet +
      "\nAwesome, now if you die, it won't be an accident.."
  );
}

submit.addEventListener('click', formAlert);
