const add = require("./math.js");

//IIFE is used in below files. Explanation in iife.js
require('./batman.js')
require('./superman.js')
console.log("Hello Node.js!");
const sum = add(1,2);
console.log(sum);