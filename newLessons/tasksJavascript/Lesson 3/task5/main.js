// 3 ta son berilgan. 2 tasi o’zaro teng. 3 chisini toping.
let x=3, y=5, z=3;

if(x==y && y==z && x==z) console.log('barcha son bir xil');
else if(x==y) console.log(z);
else if(x==z) console.log(y);
else if(y==z) console.log(x);
else ('bir xil son yoq')