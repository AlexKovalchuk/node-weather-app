console.log('server side script');

const getWeather = (city) => {
  return fetch(`http://localhost:3000/weather?address=${city}`)
    .then(response => {
      return response.json().then(weather => {

        if(weather.error) {
          console.log('Error:', weather.error);
          return {error: weather.error}
        } else {
          return weather;
        }
      });
    }).catch(error => console.log('ERROR:', error));
}

const weatherForm = document.querySelector('form');
const inputCity = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', event => {
  event.preventDefault();
  getWeather(inputCity.value)
    .then(weather => {
      console.log('Weather 2', weather);
      if(weather.error) {
        messageOne.innerText = weather.error;
        messageTwo.innerText = '';
      } else {
        messageOne.innerText = weather.forecast;
        messageTwo.innerText = weather.location;
      }

    })

})
