let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let recipe = document.getElementById('recipe');
let submit = document.getElementById('submit');
let thankYouDiv = document.getElementById('thankYou');

submit.addEventListener('click', function(event) {
  event.preventDefault();
  if((firstName.value === '') || (lastName.value === '') || (email.value === '') || (recipe.value === '')) {
    alert('Please fill out the entire form before you hit the submit button!');
  } else {
    thankYouDiv.innerHTML = ""
    renderHTML();
    document.getElementById('form').reset();
  }
  
});

function renderHTML() {
  let thankYou = thankYouDiv.insertAdjacentHTML('beforeend', `<p>Thank you, ${firstName.value} ${lastName.value}! Unfortunately I don't have the skills to do anything with the data just yet. Hang tight, I'll get there in Q2.<p>`);
  return thankYou;
}
