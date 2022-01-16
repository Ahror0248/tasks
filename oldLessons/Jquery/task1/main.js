let arr = [
  "./binocular.jpeg",
  "./book.jpg",
  "./lion.jpg",
  "./national.jpg",
  "./nature.jpg",
  "./sunset.jpg",
  "./wood.jpg",
];

$('.clickable').click(function(){
  let list = "";
  let home = $(".home");
  
  for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
    list+=`<div class='col-4'> <img src=${arr[i]} width='100%' alt'image'/> </div>`
  }
  home.append(list)
})


