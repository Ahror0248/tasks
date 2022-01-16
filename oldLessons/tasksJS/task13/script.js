let arr = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    arr.splice(i, 1);
    i--;
  }
}

console.log(arr);
