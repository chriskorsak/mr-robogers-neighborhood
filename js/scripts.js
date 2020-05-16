//business logic






//user interface logic
$(document).ready(function() {
  $("form#mr-roboger").submit(function() {
    event.preventDefault();
    var inputValue = $("#input1").val(); //get value from form input 1
    $("span#message").text(inputValue); //return input 1 value to make sure form works
    $("div#output").show();
    $("#input1").val(""); //clear out input 1 so user doesn't have to delete.
  });

});