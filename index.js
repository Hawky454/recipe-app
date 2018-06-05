let searchButton = document.getElementById('searchButton');
let searchField = document.getElementById('searchField');
let searchResults = document.getElementById('imageContainer');
let displayResults = [];

// Optional Parameters:
// i : comma delimited ingredients
// q : normal search query
// p : page
// format=xml : if you want xml instead of json
let mom = 'Neal Trent'
console.log(`Hi, ${mom}`);

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (searchField.value === '') {
    alert('Please type a recipe in the search input');
    searchField.setAttribute('style', 'background-color: #ff000073');
  } else {
    searchResults.innerHTML = ""; //clearing search results.
    fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${searchField.value}`)
      .then(response => response.json())
      .then(data => {
        let recipeData = data.results;
        // console.log(`log 1 var recipeData = ${recipeData}`);
        for (let i = 0; i < recipeData.length; i++) {
          // displayResults.push(recipeData[i].thumbnail);//need to also display
          let recipe = recipeData[i];
          let ingredients = document.createElement('p');
          let recipeCard = document.createElement('section');
          let recipeName = document.createElement('h1');
          let recipeImage = document.createElement('img');
          let recipeLink = document.createElement('a');

          ingredients.innerText = `Ingredients: ${recipe.ingredients}`;
          recipeName.innerText = recipe.title;
          if (recipe.thumbnail === "") {
            recipeImage.setAttribute('src', 'http://eugenerugby.com/img/no-image-available.png');
            recipeImage.backgroundColor = 'black';
          } else {
            recipeImage.setAttribute('src', recipe.thumbnail);
          }

          console.log(`Ingredients ${i}: ${recipe.ingredients}`);
          recipeLink.setAttribute('href', recipe.href);
          recipeLink.innerText = "View Recipe"
          recipeCard.append(recipeName);
          recipeCard.append(ingredients);
          recipeCard.append(recipeImage);
          recipeCard.append(recipeLink);
          searchResults.append(recipeCard);
          console.log(searchResults);
        }

      });
  }
});
