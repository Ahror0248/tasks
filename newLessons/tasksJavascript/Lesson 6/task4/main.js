// Bir dasturda N ta butun sonlar orasidan ham 
// eng kichigini, ham eng kattasini toping.

var n = parseInt(prompt("Nechta son kiritmoqchisiz:"));
let k = 1, min = 99999999999, max = -99999999999

while (k<=n) {
  let a = parseInt(prompt('sonni kiriting:'))

  if (min>a) min = a
  if (max<a) max = a
  k++
}

alert("Min: " + min + ',' + "Max: " + max)