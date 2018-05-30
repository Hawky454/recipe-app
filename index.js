let searchButton = document.getElementById('searchButton');
let searchField = document.getElementById('searchField');

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  if(searchField.value === '') {
    alert('Please type a recipe in the search input');
    searchField.setAttribute('style', 'background-color: #ff000073');
  } else {
    console.log('this is where I need to put an api fetch.');
  }

})
