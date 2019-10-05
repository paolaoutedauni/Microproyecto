window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("scroll");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function redirect(url) {
  window.open(url);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
