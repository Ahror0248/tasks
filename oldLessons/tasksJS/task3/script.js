function func() {
  let firstValue = document.querySelector(".firstNum").value;
  let secondValue = document.querySelector(".secondNum").value;
  let result = document.querySelector(".result");
  if (firstValue > 0 && secondValue > 0) {
    result.innerHTML = (+firstValue + +secondValue) / 2;
  } else {
    alert("0 dan katta son kiriting!");
  }
}
