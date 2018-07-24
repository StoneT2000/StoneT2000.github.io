var useful = true;
var useless = true;
var interesting = true;
$(document).on("ready", function(){
  
  $("#useful").change(function(){
    console.log("??")
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

//If no choice is selected, display a nice message :P
function noSelection(){
  if (useful == false && useless == false && interesting == false){
    $("#nofilter").css("display","block");
  }
  else {
    $("#nofilter").css("display","none");
  }
}

function filter(){
  if (useful == true && interesting == true){
    $(".useful-interesting").css("display","block");
  }
  else if (useful == false && interesting == false){
    $(".useful-interesting").css("display","none");
  }
  
  if (useless == true && interesting == true){
    $(".useless-interesting").css("display","block");
  }
  else if (useless == false && interesting == false) {
    $(".useless-interesting").css("display","none");
  }
  
  if (useful == true){
    $(".useful").css("display","block");
  }
  else {
    $(".useful").css("display","none");
  }
  if (interesting == true){
    $(".interesting").css("display","block");
  }
  else {
    $(".interesting").css("display","none");
  }
  if (useless == true){
    $(".useless").css("display","block");
  }
  else {
    $(".useless").css("display","none");
  }

}