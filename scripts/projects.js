var useful = true;
var useless = true;
var interesting = true;
$(document).on("ready", function(){
  
  $("#useful").change(function(){
    console.log("??")
    if (useful == true){
      useful = false;
      $(".useful").css("display","none");
    }
    else {
      $(".useful").css("display","block");
      useful = true;
    }
    noSelection();
  });
  $("#useless").change(function(){
    if (useless == true){
      useless = false;
      $(".useless").css("display","none");
    }
    else {
      $(".useless").css("display","block");
      useless = true;
    }
    noSelection();
  });
  $("#interesting").change(function(){
    if (interesting == true){
      interesting = false;
      $(".interesting").css("display","none");
    }
    else {
      $(".interesting").css("display","block");
      interesting = true;
    }
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