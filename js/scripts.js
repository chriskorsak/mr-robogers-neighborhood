//business logic
function mrRobogerCounts(inputValue) {
  var numbers = [];
  for (let index = 0; index <= inputValue; index+=1) {
    numbers.push(index);
  }
  return numbers;
}
function inputContains1(inputValue) {
  var userInputString = inputValue.toString(); 
  var userInputArray = userInputString.split(''); // split user input to array
  var contains1 = userInputArray.includes("1")
  return contains1;
}
function inputContains2(inputValue) {
  var userInputString = inputValue.toString(); 
  var userInputArray = userInputString.split(''); // split user input to array
  var contains2 = userInputArray.includes("2")
  return contains2;
}
function inputContains3(inputValue) {
  var userInputString = inputValue.toString(); 
  var userInputArray = userInputString.split(''); // split user input to array
  var contains3 = userInputArray.includes("3")
  return contains3;
}

//user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function() {
    event.preventDefault();
    var inputValue = parseInt($("#input1").val()); //gets value from form input 1
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
    var contains1 = inputContains1(inputValue); //function tests for 1 in user input
    if (contains1 === true) {
      output = "Beep!"
    }
    var contains2 = inputContains2(inputValue); //function tests for 2 in user input
    if (contains2 === true) {
      output = "Boop!"
    }
    var contains3 = inputContains3(inputValue); //function tests for 3 in user input
    if (contains3 === true) {
      output = "Won't you be my neighbor?"
    }

    $("span#message").text(output);
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });

});