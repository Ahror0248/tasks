// 3 xonali son berilgan. Sonni teskari songa o’giring.
let a = 235;
let b = Math.floor(a/100)  // first number
let c = Math.floor((a - b*100)/10) // second number
let d =  Math.floor((a-b*100) - c*10)
let reversed = '' + d + c + b
console.log(+reversed);