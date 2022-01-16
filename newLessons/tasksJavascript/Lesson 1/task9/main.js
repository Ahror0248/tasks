// A, B, C butun sonlari berilgan. Tomonlari A va B bo’lgan to’g’ri 
// to’rtburchakka tomoni C bo’lgan kvadratdan nechta joylashtirish mumkin?
//  Hamda ochiq qolgan yuzani ham toping.

let A = 14, B = 9, C = 4; 
let triangle = A*B
let square = Math.pow(C, 2)
let size = Math.floor(triangle/square)
let r = triangle - size*square;
console.log( 'tortburchak ichiga ' + size + 'ta kvadrat sigadi va ochiq qolgan yuza ' + r  );
