// L og’irlik o’lchov birligi berilgan (“kg”, “gram”, “tonna”,
//  “sentner”) va M kg berilgan. Shu kglarni berilgan og’irlik 
// o’lchov birligida ifodalang.

let massa = "sentner";

let m = 12

switch (massa) {
  case "kg":
    console.log(1*m + "kg");
    break;
  case "gramm":
    console.log(m * 1000 + "gramm");
    break;
  case "tonna":
    console.log(m + "tonna");
    break;
  case "sentner":
    console.log(m + "sentner");
    break;
}
