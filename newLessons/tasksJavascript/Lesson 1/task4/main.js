// 2 xonali son berilgan. Xonalarining o’rnini almashtiring.

let a = 23;
let b = Math.floor(a/10)  // first number
let c = a - b*10 // second number
let reversed = ('' + c + b)
console.log(+reversed);