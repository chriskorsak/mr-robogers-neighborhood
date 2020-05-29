//business logic
function mrRobogerCounts(inputValue) { 
  var numbers = [];
  for (let index = 0; index <= inputValue; index += 1) {
    numbers.push(index.toString());
  }
  message = numbers.map(function(number) {
    if (number.includes("3")) {
      return number = "won't you be my neighbor?";
    } else if (number.includes("2")) {
      return number = "boop";
    } else if (number.includes("1")) {
      return number = "beep";
    } else {
      return number;
    }
  });
  return message;
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
        var output = mrRobogerCounts(inputValue); // function that counts from 0 to user input number with custom messages
        $("img.magic-photo").hide(); //only hides if magic number before
        $("span.message").removeClass("magic-number"); //only remove if magic number before
      } 
    $("span.message").text(output);
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });
});