const {geocode, forecast} = require('./utils/geocode');

geocode('Vinnitsya', (error, data) => {
  if(data) {
    const {latitude, longitude, location} = data;
    forecast(latitude, longitude, (error, data) => {
      if(data) {
        const {currently, daily} = data;
        const {temperature, precipProbability} = currently;
        console.log(currently);
        console.log(daily);
        console.log(`${location}: ${daily.data[0].summary}. It is currently ${Math.round(temperature)} degrees out. THere is a ${precipProbability}% chance of rain.`);
      }
    });
  }
});
