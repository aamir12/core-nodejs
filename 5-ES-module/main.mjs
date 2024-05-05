//single import/export (1,2)
// import add from './math.mjs'
// console.log(add(5,6));

//multiple import/export (1)
// import { add , subtract}  from './math.mjs';
// console.log(add(5,6));
// console.log(subtract(6,5));

//or 
//(2)
import math from './math.mjs';
console.log(math.add(5,6));
console.log(math.subtract(6,5));

const {add , subtract}  = math; //destructuring
console.log(add(5,6));
console.log(subtract(6,5));
