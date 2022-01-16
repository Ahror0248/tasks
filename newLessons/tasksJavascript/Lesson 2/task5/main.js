// Quyidagi gap to’g’rimi? A va B sonlari 30 va 40 orasida 
// yoki 40 va 50 orasida joylashgan. 
 
let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

let javob = a>=30 && a<=50 && b>=30 && b<=50 

console.log('a son: ' + a);
console.log('b son: ' + b);
console.log(javob);
