//business logic
function mrRoboger(inputValue) {
  var numbers = [];
  for (let index = 0; index <= inputValue; index+=1) {
    numbers.push(index);
  }
  return numbers;
}





//user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function() {
    event.preventDefault();
    var inputValue = parseInt($("#input1").val()); //get value from form input 1
    var output = mrRoboger(inputValue);

    if (output[3]) {
      output[1] = "Beep!";
      output[2] = "Boop!";
      output[3] = "Won't you be my neighbor?"
    } else if (output[2]) {
      output[1] = "Beep!";
      output[2] = "Boop!";
    } else if (output[1]) {
      output[1] = "Beep!"; 
    }  

    $("span#message").text(output);
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });

});