//math 31, cse 20, cse 12, cse 15L, cogs 17, doc 1, cogs 1, cogs 10
var alldata;
async function getCourse(course, sectionCodes, termcode) {
  //watches that course's section by section code
  return new Promise(function(resolve, reject){
    var courseDetails = course.split(" ");
    var subjcode = courseDetails[0].toUpperCase();
    var crsecode = courseDetails[1].toUpperCase();
    var waitlist = 0;
    var avail = 0;
    var max = 0;
    var emptyStrPart = "";
    var indexOfFinalNum = crsecode.length;
    for (let i = 0; i < crsecode.length; i++) {
      if (isNaN(crsecode[i])) {
        indexOfFinalNum = i;
        break;
      }
    }
    for (let i = 0; i < 3 - indexOfFinalNum; i++) {
      emptyStrPart += " ";
    }
    $.get("https://act.ucsd.edu/webreg2/svc/wradapter/secure/search-load-group-data",{subjcode:subjcode, crsecode:emptyStrPart + crsecode, termcode:termcode})
      .success(data=>{
        for (let i = 0 ; i < data.length; i++) {
          if (sectionCodes.indexOf(data[i].SECT_CODE) != -1 || (sectionCodes == "all" && data[i].FK_CDI_INSTR_TYPE != "LE")) {
            waitlist += data[i].COUNT_ON_WAITLIST;
            
            max += data[i].SCTN_CPCTY_QTY;
            if (data[i].COUNT_ON_WAITLIST == 0) {
              avail += data[i].AVAIL_SEAT;
            }
          }
        }
        if (sectionCodes == "all")
          {
            sectionCodes = ["AllSections"];
          }
          resolve({waitlist: waitlist, available: avail, max: max, sections:sectionCodes, course:course});

      })
      .fail(data=>{
      alert("You are logged out of webreg system!");
    });
  });
}

function watch(course, sectionCodes, termcode, delay = 5000) {
  var spotsMin = 7;
  setInterval(async function(){
    let cdata = await getCourse(course, sectionCodes, termcode);
    sectionsString = cdata.sections.reduce((a,b) => a + ", " + b);
    console.log(cdata.course + ", sections: " + sectionsString + " have in total " + cdata.available + " seats and " + cdata.waitlist + " people are waitlisted. Max Capacity: " + cdata.max);
    if (cdata.available <= spotsMin) {
      let alertString = "ONLY " + spotsMin + " SPOTS AVAILABLE LEFT IN " + cdata.course + ", sections: " + sectionsString + "!!!";
      if ($("#alertMsgHi").length == 0) {
        $("body").append("<div id='cover' style='position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.4)';><div id='alertMsgHi' style='position:fixed;top:50%;left:50%;width:80%;max-width:800px;height:auto;transform:translate(-50%,-50%);background-color:white;border-radius:10px;box-shadow:0 2px 24px rgba(51,56,68,0.19);padding:15px;'><h1>" + alertString + "</h1></div></div>")
      }
      else {
        
      }
    }
    else {
      $("#alertMsgHi").remove();
    }
  }, delay);
}
//watch("Math 20A", ["D01","D02","D03", "D04"], "FA19", 2000);
async function updateEnrollmentStats(course, sectionCodes, termcode) {
  let cdata = await getCourse(course, sectionCodes, termcode);
  sectionsString = cdata.sections.reduce((a,b) => a + ", " + b);
    //console.log(cdata.course + ", sections: " + sectionsString + " have in total " + cdata.available + " seats and " + cdata.waitlist + " people are waitlisted. Max Capacity: " + cdata.max);
    if ($("#csd").length == 0) {
      $("body").append("<style>#csd th, #csd tr, #csd td {padding:10px;border:1px solid rgb(151,156,162)}</style>");
      $("body").append("<table id='csd' style='top:20px;left:20px;background-color:white;box-shadow:0 2px 24px rgba(51,56,68,0.19);padding:15px;position:fixed;'><th>Class/Sections</th><th>Available</th><th>Waitlisted</th><th>Seat Limit</th></div>");
      $("#csd").sortable();
    }
      var cid = "#" + course.replace(" ", "_") + cdata.sections.join("_");
      if ($(cid).length == 0) {
        $("#csd").append("<tr id=" + cid.substring(1) + "></tr>");
      }
      $(cid).html("");
      $(cid).append("<td>" + course + ": " + cdata.sections.join(", ") +"</td>");
      $(cid).append("<td>" + cdata.available +"</td>")
      $(cid).append("<td>" + cdata.waitlist +"</td>")
      $(cid).append("<td>" + cdata.max +"</td>")
}

function counter(course, sectionCodes, termcode, delay = 5000) {
  updateEnrollmentStats(course, sectionCodes, termcode);
  setInterval(async function(){
    updateEnrollmentStats(course, sectionCodes, termcode);
  }, delay);
}
function updateWaitlist() {
  $.get("https://act.ucsd.edu/webreg2/svc/wradapter/secure/get-class?schedname=My+Schedule&final=&sectnum=&termcode=FA19").success(data=> {
  for (let i = 0; i < data.length; i++) {
    if (data[i].FK_CDI_INSTR_TYPE == "LE") {
      var course = data[i].SUBJ_CODE + " " + data[i].CRSE_CODE;
      if ($("#wsd").length == 0) {
        $("body").append("<style>#wsd th, #wsd tr, #wsd td {padding:10px;border:1px solid rgb(151,156,162)}</style>");
        $("body").append("<table id='wsd' style='top:20px;right:20px;background-color:white;box-shadow:0 2px 24px rgba(51,56,68,0.19);padding:15px;position:fixed;'><tbody id='wsdsub'><th>Class/Sections</th><th>Waitlist Position</th></tbody></table>");
        $("#wsd").sortable();
      }
        var cid = "#" + course.replace(/ /g, "_");
        if ($(cid).length == 0) {
          $("#wsd").append("<tr class='waitlistRow' id=" + cid.substring(1) + "></tr>");
        }
        $(cid).html("");
        $(cid).append("<td>" + course + "</td>");
        $(cid).append("<td>" + data[i].WT_POS +"</td>")
    }
  }
});
}
function liveWaitlist(delay = 5000) {
  updateWaitlist();
  setInterval(function() {
    updateWaitlist();
  }, delay)
}
//Sortable.create(wsd, { /* options */ });

/*
$("body").append('<script type="text/javascript">function loadScript(e,t){var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){t()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}</script>');
loadScript("https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js", function(){
loadScript("https://stonet2000.github.io/files/EnrollmentScripts/checkSeatsCount.js", function(){
counter("COGS 17", "all", "FA19", 20000);
counter("COGS 10","all","FA19", 20000);
counter("CSE 20", "all", "FA19", 20000);
counter("CSE 12", "all", "FA19", 20000);
counter("CSE 15L", "all", "FA19", 20000);
liveWaitlist(60000);
})
});
*/