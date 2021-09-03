let gender = ["male", "female"];
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames=["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
let femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function dayOfBirth(){
  var date = document.getElementById('date').value;
var month = document.getElementById('month').value;
var year = document.getElementById('year').value;
var CC =  year.slice(0, -2);

  var theDay = ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*month+1)/10)) + date)%7;

  var genders = document.getElementById('genders');
  var gender = gender.options[genders.selectedIndex].value

  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames=["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
let femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

}

function nameGiver(){
  if(gender === "male" && day === "Sunday"){
    console.log("Kwasi")
  }else if(){

  }
}