const https = require('https');
const url = `https://api.darksky.net/forecast/80efff1043bfbd6f637edee42d93315e/28.468,49.232?units=si`;
let data = '';

const request = https.request(url, response => {
  response.on('data', chunk => {
    data += chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log('body', body)
  });
});

request.on('error', error => {
  console.log('An error:', error);
});

request.end();