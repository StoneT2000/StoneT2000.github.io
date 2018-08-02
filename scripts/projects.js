var useful = true;
var useless = true;
var interesting = true;
$(document).on("ready", function(){
  
  
  //Reset checkboxes
  var checkBoxes = $("#selection input");
  for (var i = 0; i < checkBoxes.length; i++){
    $("#selection input")[i].checked = true;
  }
  
  
  //Listen for changes to filters
  $("#useful").change(function(){
    if (useful == true){
      useful = false;
    }
    else {
      useful = true;
    }
    filter();
    noSelection();
  });
  $("#useless").change(function(){
    if (useless == true){
      useless = false;
    }
    else {
      useless = true;
    }
    filter();
    noSelection();
  });
  $("#interesting").change(function(){
    if (interesting == true){
      interesting = false;
    }
    else {
      interesting = true;
    }
    filter();
    noSelection();
  });
});

//If no filter is selected, display a nice message :P
function noSelection(){
  if (useful == false && useless == false && interesting == false){
    $("#nofilter").css("display","block");
  }
  else {
    $("#nofilter").css("display","none");
  }
}


//Filter based on classes
function filter(){
  var project_items = $(".item")
  for (var i = 0; i<project_items.length; i++){
    var project_item_class = project_items[i].className.split(" ");
    var hide_item = true;

    for (var j = 0; j<project_item_class.length; j++){
      
      switch(project_item_class[j]){
        case "useful":
          if (useful == true){
            hide_item = false;
          }
          break;
        case "useless":
          if (useless == true){
            hide_item = false;
          }
          break;
        case "interesting":
          if (interesting == true){
            hide_item = false;
          }
          break;
      }
    }
    if (hide_item == true){
      $(".item")[i].style["display"] = "none"
    }
    else {
      $(".item")[i].style["display"] = "block"
    }
  }

}