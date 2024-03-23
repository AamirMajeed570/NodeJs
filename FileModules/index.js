const fs = require('fs')
// console.log(fs.readFileSync('demo.txt','utf-8'));
fs.readFile('demo.txt', 'utf-8', (err, data) => {
  //This method is used for Asynchonous read File and it is a preferred one
  console.log(data)
})
