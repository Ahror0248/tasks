let a = [13, 22, 33, 44];

if (a[0] % 2 == 0) {
  a.shift();
  a.unshift(1);
} else {
  a.shift();
  a.unshift(2);
}

console.log(a);
