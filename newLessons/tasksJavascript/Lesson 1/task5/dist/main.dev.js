"use strict";

// 3 xonali son berilgan. Sonni teskari songa o’giring.
var a = 235;
var b = Math.floor(a / 100); // first number

var c = Math.floor((a - b * 100) / 10); // second number

var d = Math.floor(a - b * 100 - c * 10);
var reversed = '' + d + c + b;
console.log(+reversed);