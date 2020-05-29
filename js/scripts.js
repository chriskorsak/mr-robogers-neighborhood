//business logic
function mrRobogerCounts(inputValue) { 
  var numbers = [];
  for (let index = 0; index <= inputValue; index += 1) {
    var exception = index.toString();
    if (exception.includes("3")) {
      numbers.push("Won't you be my neighbor?")
    } else if (exception.includes("2")) {
      numbers.push("Boop!")
    } else if (exception.includes("1")) {
      numbers.push("Beep!")
    }else {
      numbers.push(index);
    }
  }
  return numbers;
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