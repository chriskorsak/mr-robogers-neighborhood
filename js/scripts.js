//business logic
function mrRobogerCounts(inputValue) { 
  var numbers = [];
  for (let index = 0; index <= inputValue; index += 1) {
    numbers.push(index);
  }
  return numbers;
}
function inputContains(inputValue) {
  var output;
  var userInputString = inputValue.toString(); 
  var numbers = userInputString.split(''); // split user input to array
  numbers.forEach(function(number) {
    if (number === "1") {
    output = 1;
    } else if (number === "2") {
        output = 2;
    } else if (number === "3") {
        output = 3;
    }
  });
  return output;
}

//user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function() {
    event.preventDefault();
    var inputValue = parseInt($("#input1").val()); //gets value from form input 1
    if (inputValue === 12321) {
      $("span#message").text("You picked the magic number. Bravo!");
      $("span#message").addClass("magic-number");
    } else {
        var output = mrRobogerCounts(inputValue); // function that counts from 0 to user input number
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

        var contains = inputContains(inputValue); //function tests for 1,2, or 3 in user input number
        if (contains === 1) {
          output = "Beep!";
        } else if (contains === 2) {
            output = "Boop!";
        } else if (contains === 3) {
            output = "Won't you be my neighbor?";
        }

        $("span#message").removeClass("magic-number");
      } 

    $("span#message").text(output);
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });
});