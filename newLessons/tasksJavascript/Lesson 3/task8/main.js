// Sonlar o’qida 3 ta A, B, va C nuqtalar berilgan. A nuqtaga 
// eng yaqin nuqta va ular orasidagi masofani aniqlang.

let a=11, b=10, c=13;
let x = Math.abs(b-a), y = Math.abs(c-a)
if (x < y) console.log(b);
if (x > y) console.log(c);


