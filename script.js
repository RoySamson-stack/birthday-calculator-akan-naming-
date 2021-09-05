function dayOfBirth() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var CC = year.toString().slice(0, -2);
  var YY = year.toString().slice(-2);

  var theDay = Math.floor((((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + ((26 * month + 1) / 10) + date) % 7);
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var genders = document.getElementById('sex');
  var gender = genders.options[genders.selectedIndex].text;

  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var result = document.getElementById('results');

  // if(date.checkValidity()){
  //   alert("enter the date");
  // }else if(month.checkValidity()){
  //  alert("Enter the month");
  // }else if(year.checkValidity()){
  //   alert("Enter the year");
  // }

  if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[0]) + " so your name is " + maleNames[0];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[0]) + " so your name is " + femaleNames[0];
  } else if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[1]) + " so your name is" + maleNames[1];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[1]) + " so your name is " + femaleNames[1];
  } else if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[2]) + " so your name is " + maleNames[2];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[2]) + " so your name is " + femaleNames[2];
  } else if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[3]) + " so your name is " + maleNames[3];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[3]) + " so your name is " + femaleNames[3];
  } else if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[4]) + " so your name is " + maleNames[4];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[4]) + " so your name is " + femaleNames[4];
  } else if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[5]) + " so your name is " + maleNames[5];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[5]) + " so your name is " + femaleNames[5];
  } else if (gender === "Male") {
    result.innerText = "Born on " + (day[theDay - 1] == day[6]) + " so your name is " + maleNames[6];
  } else if (gender === "Female") {
    result.innerText = "Born on " + (day[theDay - 1] == day[6]) + " so your name is " + femaleNames[6];
  }
}

function validate() {
  if (date.checkValidity()) {
    alert("enter the date");
  } else if (month.checkValidity()) {
    alert("Enter the month");
  } else if (year.checkValidity()) {
    alert("Enter the year");
  }
}