setTimeout(() => {
  console.log('2 seconds are up')
}, 2000);

const names = ['Andrew', "Jem", 'Jess'];
const shortNames = names.filter(name => name.length <= 4);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);
};

const data = geocode('Kyiv', (data) => {
  console.log('data 2 = ', data)
});

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (n1, n2, callback) => {
  setTimeout(() => {
    const sum = n1 + n2;
    callback(sum)
  }, 2000)
};

add(1, 4, (sum) => {
  console.log('sum = ', sum) // Should print: 5
});


