function find() {
  let value1 = document.getElementById("textAll").value;
  let value2 = document.getElementById("text2").value;
 
  if (value1.includes(value2)) {
    document.getElementById('result').innerHTML = 'Kiritgan malumotingiz berilgan textda mavjud'
  }else document.getElementById('result').innerHTML = 'Kiritgan malumotingiz berilgan textda mavjud emas'

}
