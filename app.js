'use strict';

var birthdayButton = document.getElementsByClassName('birthdayButton')[0];
var dayInput = document.querySelector('.day');
var yearInput = document.querySelector('.year');
var monthsSelect = document.getElementById('months');


birthdayButton.addEventListener('click', function() {
  birthdayCounter(yearInput.value, monthsSelect.value, dayInput.value);
});


function birthdayCounter(year, month, day) {
  // Array with seven elements, each representing a day of the week
  // daysOfWeek[0] is Sunday; daysOfWeek[6] is Saturday
  var daysOfWeek = [
    0, 0, 0, 0, 0, 0, 0
  ];

  // Compare i to date input by user
  // Have i <= year so that user can test current year or greater
  for(var i = new Date().getFullYear(); i <= year; i++) {
    // Update array accordingly
    daysOfWeek[new Date(i, month, day).getDay()]++;
  }
  console.log(daysOfWeek);
}

/****************
Notes
****************/

// Parse string values to number values

// Watch for NaN if input too high

// Apply a maximum value to input year and input date, with JS
