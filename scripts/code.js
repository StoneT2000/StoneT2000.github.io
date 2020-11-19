$(document).ready(function(){
  let allBlocks = $("pre");
  console.log("coding coding coding");
  for (let i = 0 ; i < allBlocks.length; i++) {
    let block = allBlocks[i];
    let children = $(block).children();
    if (children.length > 0 && children[0].localName == "code") {
      $(block).toggleClass("prettyprint linenums");
    }
  }
  //
  $('.prettyprint').toArray().forEach(function(element){
    let linenums = element.clientHeight / 25.2;
    if (linenums > 99) {
      $(element).addClass('threec');
    }
    else if (linenums > 9) {
      $(element).addClass('twoc');
    }
  });
  $('.prettyprint').toArray().forEach(function(element){
      let linenums = element.clientHeight / 25.2;
      if (linenums > 99) {
        $(element).addClass('threec');
      }
      else if (linenums > 9) {
        $(element).addClass('twoc');
      }
  });
  PR.prettyPrint();
})