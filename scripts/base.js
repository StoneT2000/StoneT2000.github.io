$(document).ready(function(){
  window.onscroll = function(){
    if (window.pageYOffset > 135) {
      $("header").addClass('shadow');
      $(".active").css("border-bottom", "4px solid #fefefe");
    }
    else {
      $("header").removeClass('shadow');
      $(".active").removeAttr('style');
    }
  }
  window.onscroll();
  
  addCodeCircles("java", "Java");
  addCodeCircles("tensorflow", "TensorFlow");
  addCodeCircles("p5js", "p5.js");
  addCodeCircles("js", "JS");
  addCodeCircles("html", "HTML");
  addCodeCircles("css", "CSS");
  addCodeCircles("htmlcss", "HTML & CSS");
  
  
  
});
var colors = {css:"#563d7c" , java:"#b07219", html:"#e34c26", js:"#f1e05a", p5js:"#ed225d",tensorflow:"#ff6f00",htmlcss:"#85425F"};
function addCodeCircles(name, displayName) {
  $(".project." + name +" > .code-compositions").append("<span><div class='code-circle' style='background-color:" + colors[name] +"'></div><span class='code-circle-def'>" + displayName + "</span></span>");
}