$(document).ready(function() {
  var f = window.onscroll;
  let sectionBars = $(".barWrapper");
  window.onscroll = function () {
    f();
    let py = window.pageYOffset;
    let buffer = window.innerHeight / 2;

    $(".barWrapper").removeClass('inview');

    for (let i = sectionBars.length - 1; i >= 0; i--) {
      if (py > $(sectionBars[i].attributes.href.value).offset().top + 55 - buffer) {
        $(sectionBars[i]).addClass('inview');
        break;
      }
    }
  };
  $(".sidebarsWrapper").hover(function () {
    $(".sidebars span").css('opacity', 1);
  }, function () {
    $(".sidebars span").css('opacity', 0);
  });
});