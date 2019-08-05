$(document).ready(function(){
  window.onscroll = function(){
    if (window.pageYOffset > 135) {
      $("header").addClass('shadow');
    }
    else {
      $("header").removeClass('shadow');
    }
  }
  window.onscroll();
});