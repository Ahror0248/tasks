// Darsda bajarilgan kalkulyatorga darajaga oshirish (^) amalini qo’shing.

let a = parseFloat(prompt("a = "));
let b = parseFloat(prompt("b = "));
let amal = prompt("amal: ");
let javob;
switch (amal) {
  case "+":
    javob = a + b;
    break;
  case "-":
    javob = a - b;
    break;
  case "*":
    javob = a * b;
    break;
  case "/":
    javob = a / b;
    break;
  case '^': 
    javob = Math.pow(a, 2) + Math.pow(b, 2)  
}



alert(a + amal + b + '=' + javob)
