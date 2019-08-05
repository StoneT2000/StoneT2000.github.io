$(document).ready(function() {
  $("#useless")[0].checked = true;
  $("#interesting")[0].checked = true;
  $("#useful")[0].checked = true;
  filter.add('interesting');filter.add('useful');filter.add('useless');
  for (let name of filterNames) {
    $("#" + name).on('click', function() {
      filterProjects();
    });
  };
  window.onscroll();
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
      if (classList){
      console.log(classList);
      for (let className of classList) {
        if (filter.has(className)) {
          keep = true;
          break;
        }
      }
      if (keep == false) {
        $(project).css('display','none');
        console.log($(project));
      }
      else {
        $(project).css('display','block');
      }
      }
    }
  }
}
var filterNames = ['useless','interesting','useful'];
function updateFilter() {
  for (let name of filterNames) {
    if ($("#" + name)[0].checked) {
      filter.add(name);
    }
    else {
      filter.delete(name);
    }
  }
}