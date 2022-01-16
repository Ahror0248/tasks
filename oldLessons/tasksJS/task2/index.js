function func() {
  let firstValue = document.querySelector(".firstNum").value;
  let secondValue = document.querySelector(".secondNum").value;
  let result = document.querySelector(".result");
  if (firstValue > 0 && secondValue > 0) {
    result.innerHTML =  +firstValue + +secondValue;
  }else{
    alert('0 dan katta son kiriting!')
  }
}

function func2() {
  let firstValue = document.querySelector(".firstNum2").value;
  let secondValue = document.querySelector(".secondNum2").value;
  let result = document.querySelector(".result2");
  if (firstValue > 0 && secondValue > 0) {
    result.innerHTML =  +firstValue * +secondValue;
  }else{
    alert('0 dan katta son kiriting!')
  }
}


function func3() {
  let firstValue = document.querySelector(".firstNum3").value;
  let secondValue = document.querySelector(".secondNum3").value;
  let result1 = document.querySelector(".firstkvadrat");
  let result2 = document.querySelector(".secondkvadrat");
  let result3 = document.querySelector(".and");
  if (firstValue > 0 && secondValue > 0) {
    result1.innerHTML =  +firstValue * +firstValue;
    result2.innerHTML =  +secondValue * +secondValue;
    result3.innerHTML =  'and';
  }else{
    alert('0 dan katta son kiriting!')
  }
}
