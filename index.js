let searchButton = document.getElementById('searchButton');
let searchField = document.getElementById('searchField');
let searchResults = document.getElementById('imageContainer');
let displayResults = [];

// Optional Parameters:
// i : comma delimited ingredients
// q : normal search query
// p : page
// format=xml : if you want xml instead of json



searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (searchField.value === '') {
    alert('Please type a recipe in the search input');
    searchField.setAttribute('style', 'background-color: #ff000073');
  } else {
    fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${searchField.value}`)
      .then(response => response.json())
      .then(data => {
        let recipeData = data.results;
        // console.log(`log 1 var recipeData = ${recipeData}`);
        for (let i = 0; i < recipeData.length; i++) {
          // displayResults.push(recipeData[i].thumbnail);//need to also display
          let recipe = recipeData[i];
          let recipeCard = document.createElement('section');
          let recipeName = document.createElement('h1');
          let recipeImage = document.createElement('img');
          let recipeLink = document.createElement('a');

          recipeName.innerText = recipe.title;
          recipeImage.setAttribute('src', recipe.thumbnail);
          recipeLink.setAttribute('href', recipe.href);
          recipeCard.append(recipeName);
          recipeCard.append(recipeImage);
          recipeCard.append(recipeLink);
          searchResults.append(recipeCard);
          console.log(searchResults);
        }

      });
  }
});
