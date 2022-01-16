document.querySelector('.func').addEventListener('click', func)


function func() {
  let shapeValue = document.querySelector("#shape").value;
  let colorValue = document.querySelector("#color").value;
  let widthValue = document.querySelector("#width").value;
  let heightValue = document.querySelector("#height").value;
  let styled = document.querySelector(".div").style;


  styled.backgroundColor = colorValue;
  styled.width = widthValue + 'px';
  styled.height = heightValue + 'px';
  styled.borderRadius = shapeValue + 'px'
}
