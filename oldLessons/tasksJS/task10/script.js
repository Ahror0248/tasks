let num = 18
let odd = 0
let even = 1

for (let i = 1; i <= 18; i++) {
  if(i%2==0){
    odd+=i
  }
  if(i%2!=0) {
    // console.log(i);
    even= even*i
  }
}
console.log(odd);
console.log(even);