// 3 ta son berilgan. Yig’indisi eng katta bo’ladigan 2 tasini toping.

let x=10, y=7, z=4;

let a = x+y, b = x+z, c = y+z;

if (a>b && a>c)   console.log(x,y);
if(b>a && b>c)  console.log(x,z);
if(c>a && c>b)  console.log(y,z);