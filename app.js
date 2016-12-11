'use strict';

var birthdayButton = document.querySelector('.birthdayButton');
var dayInput = document.querySelector('input.day');
var yearInput = document.querySelector('input.year');
var monthsSelect = document.getElementById('months');
var tdDaysOfWeek = document.querySelectorAll('.daysOfWeek td')

var tdLength = tdDaysOfWeek[0].textContent.length; // Initial length
var daysArray = [
  'Sunday: ',
  'Monday: ',
  'Tuesday: ',
  'Wednesday: ',
  'Thursday: ',
  'Friday: ',
  'Saturday: '
];

birthdayButton.addEventListener('click', function () {
  birthdayCounter(yearInput.value, monthsSelect.value, dayInput.value);
});


function birthdayCounter(year, month, day) {
  // See if tdLength has increased
  if (tdDaysOfWeek[0].textContent.length > tdLength) {
    for (var x = 0; x < daysArray.length; x++) {
      // Change content to match daysArray, a form of "clearing"
      tdDaysOfWeek[x].textContent = daysArray[x];
    }
  }

  // Array with seven elements, each representing a day of the week
  // daysOfWeek[0] is Sunday; daysOfWeek[6] is Saturday
  var daysOfWeek = [
    0, 0, 0, 0, 0, 0, 0
  ];

  // Compare i to date input by user
  // Have i <= year so that user can test current year or greater
  for (var i = new Date().getFullYear(); i <= year; i++) {
    // Update array accordingly
    daysOfWeek[new Date(i, month, day).getDay()]++;
  }

  for (var i = 0; i < tdDaysOfWeek.length; i++) {
    // Update tdDaysOfWeek with values from daysOfWeek array
    tdDaysOfWeek[i].textContent += daysOfWeek[i];
  }
}

/****************
Notes
****************/

// Watch for NaN if input too high

// Apply a maximum value to input year and input date, with JS

// Event bubbling
  // Children of ancestor respond "click," etc., example below
  // document.addEventListener('click', function(event) {
  //   console.log(event.target);
  // });
// event.target and event.target.tagName useful to isolate elements
