"use strict";

// 4 xonali son berilgan. Sonni teskari songa o’giring.
var a = 2358;
var b = Math.floor(a / 1000); // first number

var c = Math.floor((a - b * 1000) / 100); // second number

var d = Math.floor(a - b * 100 - c * 10);
var reversed = '' + d + c + b;
console.log(d);