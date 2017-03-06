var wrapper = document.querySelector('.recipe__image--wrapper');
var image = document.querySelector('.recipe__image');
var recipe = document.getElementsByClassName('recipe__article--structured');
var recipeImage = document.getElementsByClassName('recipe__image--structured');
var recipeHeadline = document.getElementsByClassName('recipe__article--structured-headline');
var nextWrapper = document.querySelector('.recipe__article--next-recipe');
var nextRecipeTitle = document.querySelector('.recipe__article--next-title');
var nextRecipeText = document.querySelector('.recipe__article--next-text');
var nextRecipeKicker = document.querySelector('.kicker');
var nextButton = document.querySelector('.recipe__article--next-button');
var readMore = document.querySelector('.recipe__article--read-more');
var articleBody = document.querySelector('.recipe__article--content');
var buttonText = document.querySelector('.circle-button');

readMore.addEventListener('click', function(){
  this.classList.toggle('visible');
  articleBody.classList.toggle('visible');
  if(this.classList.contains("visible")){
    buttonText.innerHTML = '<span class="circle"><svg width="30px" height="31px" viewBox="38 2137 30 31" version="1.1"><polygon stroke="none" fill="#333333" points="51.3635908 2154.36367 51.9431342 2167.72726 54.0226726 2167.72726 54.6363069 2154.36367 67.9998976 2153.75004 67.9998976 2151.6705 54.6363069 2151.09096 54.0226726 2137.72737 51.9431342 2137.72737 51.3635908 2151.09096 38 2151.6705 38 2153.75004"></polygon></svg></span> Close';
  }else{
    buttonText.innerHTML = '<span class="circle"><svg width="30px" height="31px" viewBox="38 2137 30 31" version="1.1"><polygon stroke="none" fill="#333333" points="51.3635908 2154.36367 51.9431342 2167.72726 54.0226726 2167.72726 54.6363069 2154.36367 67.9998976 2153.75004 67.9998976 2151.6705 54.6363069 2151.09096 54.0226726 2137.72737 51.9431342 2137.72737 51.3635908 2151.09096 38 2151.6705 38 2153.75004"></polygon></svg></span> Read more';
  }
});

window.addEventListener('scroll', function(){
  for(var i = 0; i< recipe.length; i++){
    if(recipe[i].getBoundingClientRect().top <= (window.innerHeight / 2) && recipe[i].getBoundingClientRect().top > 0){
      var src = recipe[i].dataset['imageSrc'];
      var newImage = document.createElement('img');
      //adds class to current recipe
      recipe[i].classList.add('inview');
      //selects next recipe
      var firstRecipe = document.querySelector('.recipe__article--structured .recipe__article--structured-headline h1')
      var nextRecipe = document.querySelector('.recipe__article--structured.inview + .recipe__article--structured .recipe__article--structured-headline h1');

      //controls the text in the next pop up
      if(nextRecipe != null){
        nextButton.classList.remove('top');
        nextWrapper.classList.add('visible');
        nextRecipeText.classList.add('visible');
        console.log(nextRecipe.getBoundingClientRect);
        nextRecipeTitle.innerHTML = nextRecipe.innerHTML;
        nextRecipeKicker.innerHTML = 'Next recipe ';
      }else {
        nextButton.classList.add('top');
        nextRecipeTitle.innerHTML = firstRecipe.innerHTML;
        nextRecipeKicker.innerHTML = 'First recipe ';
      }

      newImage.setAttribute('src', src);
      newImage.setAttribute('class', 'recipe__image fadeIn');
      if(image.getAttribute("src") != src){
        image.remove();
        wrapper.appendChild(newImage);
        image = document.querySelector('.recipe__image');
      }
      //loads images on mobile
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       if(recipeImage[i] != undefined){
        var source = recipeImage[i].dataset['src'];
        recipeImage[i].setAttribute('src', source);
       }
      }
    }else {
      recipe[i].classList.remove('inview');
    }
    var top  = window.pageYOffset; // || document.documentElement.scrollTop
    if(top < 110){
      nextWrapper.classList.remove('visible');
      nextRecipeText.classList.remove('visible');
    }
  }
})
