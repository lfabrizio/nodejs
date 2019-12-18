const fs = require('fs');
// always use async
const files = fs.readdirSync('./');

console.log(files);