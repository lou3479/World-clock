setInterval(function (){
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = document.querySelector("#los-angeles .date");
    let losAngelesTimeElement = document.querySelector("#los-angeles .time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = document.querySelector("#paris .date");
    let parisTimeElement = document.querySelector("#paris .time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Cairo
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = document.querySelector("#cairo .date");
    let cairoTimeElement = document.querySelector("#cairo .time");
    let cairoTime = moment().tz("Africa/Cairo");

    cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
    cairoTimeElement.innerHTML = cairoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
},1000);

function updateCity(event) {
  let cityTimeZone= event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_"," ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
    </div>
    <a href="index.html">All cities</a>
    `;
}


let citiesSelectElement = document.querySelector("#city")

citiesSelectElement.addEventListener("change", updateCity);