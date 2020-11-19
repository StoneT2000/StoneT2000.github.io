$(document).ready(function() {
  var f = window.onscroll;
  let sectionBars = $(".barWrapper");
  window.onscroll = function() {
    f();
    let py = window.pageYOffset;
    let buffer = window.innerHeight/2;
    $(".barWrapper").removeClass('inview');
    for (let i = sectionBars.length - 1; i >= 0; i--) {
      //55 is anchor css top magnitude
      if (py > $(sectionBars[i].attributes.href.value).offset().top - buffer + 55) {
        $(sectionBars[i]).addClass('inview');
        break;
      }
    }
    };
$(".sidebarsWrapper").hover(function() {
    $(".sidebars span").css('opacity', 1);
  }, function() {
    $(".sidebars span").css('opacity', 0);
  })
  window.onscroll();
});