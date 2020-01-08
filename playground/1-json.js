const fs = require('fs');

const dataBuffer  = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Alex';
data.age= 28;
const dataSTR = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataSTR);
console.log(data.name, data.planet, data.age);
