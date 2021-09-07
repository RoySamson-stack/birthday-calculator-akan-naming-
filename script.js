function dayOfBirth() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var CC = year.slice(0, 2);
  var YY = year.slice(2, 4);


  if (date == "" || month == "" || year == "") {
    alert("All the data must be filled out");
    return false;
  }

  var theDay = Math.floor((((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + ((26 * month + 1) / 10) + date) % 7);
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var genders = document.getElementById('sex');
  var gender = genders.options[genders.selectedIndex].text;

  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var results = document.getElementById('results');
  var current_year = new Date().getFullYear();
  if (isNaN(date) || date > 31) {
    alert('Please enter a valid date');
  } else if (isNaN(month) || month > 12) {
    alert('Please enter a valid month');
  } else if (isNaN(year) || year.length != 4 || year < 1920 || (year > current_year)) {
    alert('Please enter a valid year');
  } else if(!isNaN(date) && !isNaN(month) && !isNaN(year)) {
    if (gender === "Male") {
      results.innerText = "You were born on " + day[theDay - 1] + " and your name is " + maleNames[theDay - 1];
    } else if (gender === "Female") {
      results.innerText = "You were born on " + day[theDay - 1] + " and your name is " + femaleNames[theDay - 1];
    }
  }

}