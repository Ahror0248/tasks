//  L og’irlik o’lchov birligi berilgan (“kg”, “gram”, “tonna”,
//  “sentner”) va M og’irlik berilgan. Shu og’irlikni
//  kglarda ifodalang.

let massa = "sentner";

let m = 12

switch (massa) {
  case "kg":
    console.log(1*m + "kg");
    break;
  case "gramm":
    console.log(m * 1/1000 + "kg");
    break;
  case "tonna":
    console.log(m*1000 + "kg");
    break;
  case "sentner":
    console.log(m*100 + "kg");
    break;
}
