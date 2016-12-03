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
