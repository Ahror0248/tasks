"use strict";

// 2 xonali son berilgan. Xonalarining o’rnini almashtiring.
var a = 23;
var b = Math.floor(a / 10); // first number

var c = a - b * 10; // second number

var reversed = '' + c + b;
console.log(+reversed);