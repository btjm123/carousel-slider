/* reference the left button */
const goButton = document.querySelector('.goButton');

/* get the width of the window */
var WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

var currentSlideClass = '.slide';
var currentSlide = 0;
var totalSlides = 5;

goButton.addEventListener('click', function(){
	/* get the instanteous width of the current slide */
	var currentWidth = window.getComputedStyle(document.querySelector(currentSlideClass + ((currentSlide+1).toString()))).width;

	/* if the user resizes the window (bigger or smaller), we need to adapt accordingly to check whether a slide is done animating*/
	window.onresize = function() {
		WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}

	/* check if the current slide is done animating to prevent the user from spamming the animations */
	if (!(Math.round(parseFloat(currentWidth)) == WIDTH || Math.floor(parseFloat(currentWidth)) == WIDTH || Math.ceil(parseFloat(currentWidth)) == WIDTH)) {
		return;
	} 

	currentSlide++;

	/* make the current slide disappear */
	document.querySelector(currentSlideClass + ((currentSlide).toString())).style.width = 0;

	/* if we are at the end of the slideshow, go back to the first slide */
	if (currentSlide >= totalSlides) currentSlide = 0;

	var nextSlide = currentSlide + 1;

	/* add the next slide */
	document.querySelector(currentSlideClass + ((nextSlide).toString())).style.width = '100%';
});