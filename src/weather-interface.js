$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    asyncApiCall();

    async function asyncApiCall() {
      let response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    }


    


      const getElements = function(response){
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.showSunset').text(`Todays sunset will be at ${response.sys.sunset}.`);
      $('.showClouds').text(`Cloud Survey: ${response.weather[0].description}.`);

    };
  });
});
