var index = 0;
slideshow ();
function slideshow () {
  var slideClass = document.getElementsByClassName("slide");
  for (var i = 0; i < slideClass.length; i++) {
    slideClass[i].style.display = "none";
  }
  index++;
  if (index > slideClass.length) {
    index = 1;
  }
  slideClass[index - 1].style.display = "block";
  setTimeout(slideshow , 3000); 
}
