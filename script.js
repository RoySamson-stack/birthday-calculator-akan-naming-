let gender = ["male", "female"];
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames=["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
let femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function dayOfBirth(){
var date = document.getElementById('date').value;
var month = document.getElementById('month').value;
var year = document.getElementById('year').value;
var CC =  year.toString().slice(0, -2);
var YY = year.toString().slice(-2)

var theDay = Math.floor((((CC/4)-2*CC-1) + (5*YY/4) + ((26*month+1)/10 )+ date)%7);

var genders = document.getElementById('genders');
var gender = gender.options[genders.selectedIndex].value

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames=["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


if(gender === "Male" ){
document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + maleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}else if(gender === "Female" ){
  document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is" + femaleNames[0];
}


}

