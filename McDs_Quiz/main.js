// initialize an array for storing checked radio values
var a = [];

// initialize a counting variable
var t = 0;

// get the number of radio forms
var l = $(".radios").length;

// function to reset the quiz
function clearRadios() {
  $('input[type="radio"]').prop("checked", false);
  a.length = 0;
  t = 0;
}

// event handler for the first set of radios
$("#radioset1").change(function () {
  // add the checked radio value to the array at the first position
  a.splice(0, 1, $('#radioset1 input[type="radio"]:checked').val());
});

// event handler for the second set of radios
$("#radioset2").change(function () {
  // add the checked radio value to the array at the second position
  a.splice(1, 1, $('#radioset2 input[type="radio"]:checked').val());
});

// event handler for the third set of radios
$("#radioset3").change(function () {
  // add the checked radio value to the array at the third position
  a.splice(2, 1, $('#radioset3 input[type="radio"]:checked').val());
});


// compile the results

$(".see-results").click(function () {
  // loop through the array of checked values
  // add 1 to the total of true values each time
  // a value equals 'True'
  for (var i = 0; i < a.length; i++) {
    if (a[i] === "True") {
      t++;
    }
  }

  // print the percentage of 'True' values
  // the % is calculated by dividing the total number of radios - stored in var l
  // by the number of 'True' values - stored in var t
  // divide this number by 100 and process it through Math.round to get
  // a number for displaying percentages
  $(".score").text(Math.round((t / l) * 100) + "%");

  // clear the form when done printing the calculation
  clearRadios();
});

// Notes

// 1. the splice() method is used to add an item to the array at a specific position; remember, array values start at 0; so, to add a value to the first position of an array, you have to specify 0; to add a value to the third position, you have to specify 2

// 2. the second number in the splice() method - 1 - tells the function to delete the previous value at this array position; this is done so that if the user goes back and forth, clicking on true and false within the same radio form, we only capture the last value checked
