var acc = document.getElementsByClassName("accordion");
/*h2 onclick*/
var header = document.getElementsByClassName("acc");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].onclick = function () {
    this.classList.toggle("active");
    var answers = this.nextElementSibling;
	  if (answers.style.maxHeight){
  	  answers.style.maxHeight = null;
    } else {
  	  answers.style.maxHeight = answers.scrollHeight + 'px';
    } 
  }
}
//$( function() {
//    $( "#accordion" ).accordion();
//  } ); playing with jquery but this didn't work like I thought it would   

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide_pic");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
  
}
