$(document).ready(function () {  
  $("#useless")[0].checked = true;
  $("#interesting")[0].checked = true;
  $("#useful")[0].checked = true;
  filter.add('interesting');
  filter.add('useful');
  filter.add('useless');
  for (let name of filterNames) {
    $("#" + name).on('click', function () {
      filterProjects();
      
    });
  };
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
var filter = new Set();

function filterProjects() {
  updateFilter()
  let projects = $("#projects").children();
  let allKeys = Object.keys(projects);
  for (let key of allKeys) {
    let project = projects[key];
    if (project != undefined) {
      let classList = project.classList;
      let keep = false;
      if (classList) {
        for (let className of classList) {
          if (filter.has(className)) {
            keep = true;
            break;
          }
        }
        if (keep == false) {
          $(project).css('display', 'none');
        } else {
          $(project).css('display', 'block');
        }
      }
    }
  }
  let paragraph = $("#unchecked-all-paragraph");
  if (filter.size === 0) {
    console.log("ha", paragraph);
    paragraph.css("display", "block");
  }
  else {
    paragraph.css("display", "none");
  }
}
var filterNames = ['useless', 'interesting', 'useful'];

function updateFilter() {
  for (let name of filterNames) {
    if ($("#" + name)[0].checked) {
      filter.add(name);
    } else {
      filter.delete(name);
    }
  }

}