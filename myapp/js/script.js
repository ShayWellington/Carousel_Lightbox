function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById('openNav').addEventListener('click',function(){
  openNav();
});

document.getElementById('closeNav').addEventListener('click',function(){
  closeNav();
});

document.getElementById('currentSlide1').addEventListener('click',function(){
  openModal();
});

document.getElementById('currentSlide2').addEventListener('click',function(){
  openModal();
});

document.getElementById('currentSlide3').addEventListener('click',function(){
  openModal();
});

document.getElementById('currentSlide4').addEventListener('click',function(){
  openModal();
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

document.getElementById("closeModal").addEventListener("click", function(){
  closeModal();
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.getElementById("plusSlidesPrev").addEventListener("click", function(){
  plusSlides(-1);
});

document.getElementById("plusSlidesNext").addEventListener("click", function(){
  plusSlides(1);
});



document.getElementById("currentSlide5").addEventListener("click", function(){
  currentSlide(1);
});

document.getElementById("currentSlide6").addEventListener("click", function(){
  currentSlide(2);
});

document.getElementById("currentSlide7").addEventListener("click", function(){
  currentSlide(3);
});

document.getElementById("currentSlide8").addEventListener("click", function(){
  currentSlide(4);
});

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
