$(document).ready(function(){
  let f = window.onscroll;
  window.onscroll = function() {
    f();
    let py = window.pageYOffset;
    let buffer = window.innerHeight/2;
    $(".barWrapper").removeClass('inview');
    if (py > $("#awards").offset().top - buffer) {
      $("#bar4").addClass('inview');
    }
    else if (py > $("#work").offset().top - buffer) {
      $("#bar3").addClass('inview');
    }
    else if (py > $("#projects").offset().top - buffer) {
      $("#bar2").addClass('inview');
    }
    else if (py > $("#heading").offset().top - buffer) {
      $("#bar1").addClass('inview');
    }
  };
  $(".sidebarsWrapper").hover(function() {
    $(".sidebars span").css('opacity', 1);
  }, function() {
    $(".sidebars span").css('opacity', 0);
  })
  window.onscroll();
});