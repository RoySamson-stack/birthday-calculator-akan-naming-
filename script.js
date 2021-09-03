

function dayOfBirth(){
var date = document.getElementById('date').value;
var month = document.getElementById('month').value;
var year = document.getElementById('year').value;
var CC =  year.toString().slice(0, -2);
var YY = year.toString().slice(-2);

var theDay = Math.floor((((CC/4)-2*CC-1) + (5*YY/4) + ((26*month+1)/10 )+ date)%7);



var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames=["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
alert(theDay)

// if(gender === "Male" ){
// document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is " + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -1] + "so your name is " + femaleNames[0];
// }else if(gender === "Male" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -2] + "so your name is" + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -2] + " so your name is " + femaleNames[0];
// }else if(gender === "Male" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -3] + " so your name is " + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -3] + " so your name is " + femaleNames[0];
// }else if(gender === "Male" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -4] + " so your name is " + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -4] + " so your name is " + femaleNames[0];
// }else if(gender === "Male" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -5] + " so your name is " + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -5] + " so your name is " + femaleNames[0];
// }else if(gender === "Male" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -6] + " so your name is " + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -6] + " so your name is " + femaleNames[0];
// }else if(gender === "Male" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -7] + " so your name is " + maleNames[0];
// }else if(gender === "Female" ){
//   document.getElementById('results').innerHTML = "Born on " + day[theDay -7] + " so your name is " + femaleNames[0];
// }else{
//   alert('Nothing entered')
// }

}

console.log(dayOfBirth())