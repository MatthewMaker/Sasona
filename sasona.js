var acc = document.getElementsByClassName("accordion");
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