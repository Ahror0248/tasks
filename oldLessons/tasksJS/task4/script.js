function func(){
  let numValue = document.querySelector('.number').value
  if (numValue%2==0) {
    console.log(`${numValue} soni juft`);
  }
  if (numValue%2!=0) {
    console.log(`${numValue} soni toq`);
  }
}