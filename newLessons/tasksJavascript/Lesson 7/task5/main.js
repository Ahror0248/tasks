// 5 ta sondan kattasini topib beruvchi dastur tuzing. 
// Shu funksiyani tuzishda 2 ta sondan kattasini 
// topib beradigan funksiya tuzib foydalaning.


function compareFiveNumbers(a,b,c,d,e) {
  return compareTwoNumbers(compareFourNumbers(a,b,c,d),e)
 }
 console.log(compareFiveNumbers(12,11,11,34,45));

function compareFourNumbers(a,b,c,d) {
  return compareTwoNumbers(compareThreeNumbers(a,b,c),d)
 }

function compareThreeNumbers(a,b,c) {
 return compareTwoNumbers(compareTwoNumbers(a,b),c)
}

function compareTwoNumbers(a,b) {
  if (a>b) return a
  else return b
}
