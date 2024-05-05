/**
 * Single export
 */
// module.exports = (a,b) => a+b; 


//or

// const add = (a,b) => a+b
// module.exports = add;

//multiple exports

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;

module.exports = {
  add, 
  subtract
}
