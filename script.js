let gender = ["male", "female"];
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let maleNames=["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
// let femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var date = document.getElementById('date');
var month = document.getElementById('month');
var year = document.getElementById('year');
var CC =  year.slice(0, -2);
var YY = year.splice(2);


function nameGiver(){
  if(gender === "male" && day === "Sunday"){
    console.log("Kwasi")
  }else if(){

  }
}