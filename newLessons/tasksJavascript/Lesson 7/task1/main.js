// A dan B gacha summani hisoblab qaytaradigan
// sum(a) funksiyasini tuzing.

let a = 1, num = 0;

function sum(all) {
  for (let i = a; i<=all; i++) {
    num+=i    
  }
  return num
}

console.log(sum(10));