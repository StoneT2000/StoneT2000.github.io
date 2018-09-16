var sidebar_on = false;
function sidebar(){
  var sideb = document.getElementsByClassName('sidebar');
  var header = document.getElementsByClassName('header');
  var header_icon = document.getElementById('sidebar_button');
  if (sidebar_on == false){
    
    sideb[0].style["transform"] = "translate(0,0)";
    
    header[0].style["transform"] = "translate(200px,0)";
    
    header_icon.innerHTML = "<i class=\"fas fa-times\" onclick=\"sidebar()\"></i>";
    sidebar_on = true;
  }
  else {
    sideb[0].style["transform"] = "translate(-200px,0)";
    
    header[0].style["transform"] = "translate(0,0)";
    
    header_icon.innerHTML = "<i class=\"fas fa-bars\" onclick=\"sidebar()\"></i>";
    sidebar_on = false;
  }
  
}
var dropped = {'home':false,'about':false, 'projects':false};
function displayDrop(name) {
  if (dropped[name] == false) {
    dropped[name] = true;
    $("#"+name +" ion-icon").css('transform','rotate(90deg)');
     $("#"+name + " .drop_down_folder").css('transform','translate(0,0)');
  }
  else {
    $("#"+name +" ion-icon").css('transform','rotate(0deg)');
    dropped[name] = false;
    $("#"+name + " .drop_down_folder").css('transform','translate(-150px,0)');
  }
  
}
$(document).ready(function(){
  window.setInterval(function(){
    if ($(".underscore_anim").css("display") == "none"){
      $(".underscore_anim").css("display","inline");
    }
    else {
      $(".underscore_anim").css("display","none");
    }
    
  },1000);
})