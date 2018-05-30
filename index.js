let searchButton = document.getElementById('searchButton');
let searchField = document.getElementById('searchField');

searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (searchField.value === '') {
        alert('Please type a recipe in the search input');
        searchField.setAttribute('style', 'background-color: #ff000073');
      } else {
        fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${searchField.value}`)
          .then(response => response.json())
          .then(data => console.log(data));
      }
    });
