setInterval(function (){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = document.querySelector ("#los-angeles .date");
let losAngelesTimeElement = document.querySelector ("#los-angeles .time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
);


//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = document.querySelector("#paris .date");
let parisTimeElement = document.querySelector("#paris .time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
},1000);