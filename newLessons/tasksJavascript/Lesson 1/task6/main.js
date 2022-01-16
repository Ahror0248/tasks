// 4 xonali son berilgan. Sonni teskari songa o’giring.
let a = 2358;
let b = Math.floor(a/1000)  // first number
let c = Math.floor((a - b*1000)/100) // second number
let d =  Math.floor((a - b*1000)/10) - Math.floor(c*10)  // third number
let e = Math.floor((a - b*1000))
let f = Math.floor(e/100)
let m = Math.floor((e - f*100)/10)
let n = Math.floor((e - f*100) - m*10)  // fourth number
let reversed = '' + n + d + c + b
console.log(+reversed);