// N ta butun sonlar orasidan eng kichigini toping.

var n = parseInt(prompt("Nechta son kiritmoqchisiz:"));
let k = 1, min = 99999999999;

while (k<=n) {
  let a = parseInt(prompt('sonni kiriting:'))

  if (min>a) min = a
  k++
}

alert("Min: " + min)

