'use strict';

var birthdayButton = document.querySelector('.birthdayButton');
var dayInput = document.querySelector('input.day');
var yearInput = document.querySelector('input.year');
var monthsSelect = document.getElementById('months');
var tdDaysOfWeek = document.querySelectorAll('.daysOfWeek td');

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

// Insert value of current year into HTML
yearInput.value = new Date().getFullYear();
// Insert min as current year into HTML
yearInput.min = new Date().getFullYear();
// Insert max as (current year + 1000)
yearInput.max = new Date().getFullYear() + 1000;

birthdayButton.addEventListener('click', function () {
  birthdayCounter(yearInput.value, monthsSelect.value, dayInput.value);
  yearInput.focus();
});

yearInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    birthdayCounter(yearInput.value, monthsSelect.value, dayInput.value);
    yearInput.focus();
  }
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

// Remove "focus" from button, in smaller devices, after press

// Event bubbling
  // Children of ancestor respond "click," etc., example below
  // document.addEventListener('click', function(event) {
  //   console.log(event.target);
  // });
// event.target and event.target.tagName useful to isolate elements
