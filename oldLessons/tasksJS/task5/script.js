var rand = Math.round(Math.random() * 100);

if (rand%5==0) {
  console.log(`${rand} soni 5 ga bo'linadi`);
}

if (rand%3==0) {
  console.log(`${rand} soni 3 ga bo'linadi`);
}

if (rand%5==0 && rand%3==0) {
  console.log(`${rand} soni 3 va 5 ga bo'linadi`);
}

if (rand%5!==0 && rand%3!==0) {
  console.log(`${rand} soni 3 va 5 ga bo'linmaydi`);
}