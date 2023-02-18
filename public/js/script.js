let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});



const deleteRecipe = document.getElementById('deleteRecipe');
deleteRecipe.addEventListener('click', function(e) {
  console.log('button was clicked');

  // fetch('/delete/recipe', {method: 'POST'})
  //   .then(function(response) {
  //     if(response.ok) {
  //       console.log('click was recorded');
  //       return;
  //     }
  //     throw new Error('Request failed.');
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
});