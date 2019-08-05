$(document).ready(function() {
  let f = window.onscroll;
  window.onscroll = function() {
    f();
    let py = window.pageYOffset;
    let buffer = window.innerHeight/2;
    $(".barWrapper").removeClass('inview');
    if (py > $("#principles").offset().top - buffer) {
      $("#bar4").addClass('inview');
    }
    else if (py > $("#education").offset().top - buffer) {
      $("#bar3").addClass('inview');
    }
    else if (py > $("#brief").offset().top - buffer) {
      $("#bar2").addClass('inview');
    }
    };
$(".sidebarsWrapper").hover(function() {
    $(".sidebars span").css('opacity', 1);
  }, function() {
    $(".sidebars span").css('opacity', 0);
  })
  window.onscroll();
});