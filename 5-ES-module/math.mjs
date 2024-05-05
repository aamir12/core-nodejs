//single export (1)
// const add = (a,b) => a+b;
// export default add;

//or (2)

// export default (a,b) => a+b;

//multiple export (1)
// export const add = (a,b) => a+b;
// export const subtract = (a,b) => a+b;

//or (2)
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;

export default {
  add,
  subtract
}