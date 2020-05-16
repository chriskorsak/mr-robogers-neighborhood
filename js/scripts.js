//business logic
function mrRoboger(inputValue) {
  var countUp = [];
  for (let index = 0; index <= inputValue; index+=1) {
    countUp.push(index);
  }
  return countUp;
}





//user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function() {
    event.preventDefault();
    var inputValue = parseInt($("#input1").val()); //get value from form input 1
    var output = mrRoboger(inputValue);
    $("span#message").text(output);
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });

});