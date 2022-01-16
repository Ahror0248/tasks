let unli = ["a", "e", "i", "o", `o'`, "u"];
let word = `o'aoa`;
let arr = word.split('')
let num = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i]+arr[i+1]=== `o'`) {
     val  = arr[i]+arr[i+1]
     val = 1
     num+=val
  }
  for (let j = 0; j < unli.length; j++) {
    if (arr[i]+arr[i+1]=== `o'`) {
      val1  = arr[i]+arr[i+1]
       len = val1.length
       break
   }
    if (arr[i]==unli[j])  {
      num= num + (arr[i].length) 
    }
  }
}
console.log(num);

