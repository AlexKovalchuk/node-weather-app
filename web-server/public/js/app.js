console.log('server side script');

fetch('http://localhost:3000/weather?address=Boston')
  .then(response => {
    return response.json().then(weather => {

      if(weather.error) {
        console.log('Error:', weather.error);
      } else {
        console.log('weather', weather);
      }
    });
  })

  .catch(error => console.log('ERROR:', error));


