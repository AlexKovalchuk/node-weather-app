const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=pk.eyJ1IjoiYWxlemFuZGVya292YWxjaHVrIiwiYSI6ImNrNWNlZzFjbjBsbGYzbW5xNnBhOGplb3AifQ.TQqrpm2lLCIYrd3rPIpmew`;
  request({url: url, json: true}, (error, response) => {
    const {features} = response.body;
    if(error){
      callback('could not connection');
    } else if(!features || !features.length){
      callback('No data found')
    } else {
      const {center, matching_text} = features[0];
      callback(null, {
        latitude: center[0],
        longitude: center[1],
        location: matching_text,
      });
    }

  });
};

const forecast = (lat, lng, callback) => {
  console.log('lat:', lat);
  console.log('lng:', lng);
  const urlWeather = `https://api.darksky.net/forecast/80efff1043bfbd6f637edee42d93315e/${lat},${lng}?units=si`;
request({url: urlWeather, json: true}, (error, response) => {
  if(error) {
    response(`Error unable connect: ${error}`)
  } else if(response.body.error) {
    callback('Unable to find location')
  } else {
    callback(null, response.body);
  }
});
};

module.exports = {geocode: geocode, forecast: forecast}