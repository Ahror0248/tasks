// A soni tub yoki tub emasligini 
// tekshirib beruvchi tubmi(A) funksiyasini tuzing.


// let a = 23
// let i = 2, b, c = true;
// while (i <= a) {
//   b = a % i;
//   if (b == 0) {
//     c = false;
//     break;
//   }
//   i++;
// }
// if (c) {
//   console.log('kiritgan soningiz tub son')
// } else {
//   console.log("kiritgan soningiz tub son emas");
// }

let a = 37, c = true;

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    b = num % i
    if (b == 0) {
      c = false
      break
    }
  }
    if (c) {
        return ('kiritgan soningiz tub son')
      } else {
        return ("kiritgan soningiz tub son emas");
      }
}

console.log(isPrime(a));