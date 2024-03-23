// Default Module for Node.js
// const lib = require('./Index.js')
// // console.log(lib);
// let a = 10;
// let b = 20;

// let c = lib.addNum(a,b);
// console.log(c);

// *************
// ES Modules
import {addNum} from './Index.js'

let a = 10;
let b = 20;
console.log(addNum(a,b));