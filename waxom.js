var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.scroll = "ease-in"
  dots[slideIndex-1].className += " active";
}

// SWIPER SLIDE




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

// hamburger
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// 
function All() {
  document.getElementById("web").style.display ='none';
  document.getElementById("al").style.display ='grid';
  document.getElementById("Photo").style.display ='none';
  document.getElementById("illus").style.display ='none';
  document.getElementById("mob").style.display ='none';
}
function WEB() {
  document.getElementById("web").style.display ='grid';
  document.getElementById("al").style.display ='none';
  document.getElementById("Photo").style.display ='none';
  document.getElementById("illus").style.display ='none';
  document.getElementById("mob").style.display ='none';
}
function PHOTO() {
  document.getElementById("web").style.display ='none';
  document.getElementById("al").style.display ='none';
  document.getElementById("Photo").style.display ='grid';
  document.getElementById("illus").style.display ='none';
  document.getElementById("mob").style.display ='none';
}
function ILLUS() {
  document.getElementById("web").style.display ='none';
  document.getElementById("al").style.display ='none';
  document.getElementById("Photo").style.display ='none';
  document.getElementById("illus").style.display ='grid';
  document.getElementById("mob").style.display ='none';
}
function MOB() {
  document.getElementById("web").style.display ='none';
  document.getElementById("al").style.display ='none';
  document.getElementById("Photo").style.display ='none';
  document.getElementById("illus").style.display ='none';
  document.getElementById("mob").style.display ='grid';
}

