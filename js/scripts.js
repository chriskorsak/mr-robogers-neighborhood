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
  var contains1 = numbers.includes("1");
  var contains2 = numbers.includes("2");
  var contains3 = numbers.includes("3");
  if (contains3 === true) {
    output = 3;
  } else if (contains2 === true) {
    output = 2;
  } else if (contains1 === true) {
    output = 1;
  }
  return output;
}

//user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function() {
    event.preventDefault();
    var inputValue = parseInt($("#input1").val()); //gets value from form input 1
    if (inputValue === 12321) {
      $("span.message").text("You picked the magic number. Bravo!");
      $("span.message").addClass("magic-number");
      $("img.magic-photo").show();
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
        $("img.magic-photo").hide(); //only hides if magic number before
        $("span.message").removeClass("magic-number"); //only remove if magic number before
      } 

    $("span.message").text(output);
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });
});