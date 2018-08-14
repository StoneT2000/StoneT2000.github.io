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