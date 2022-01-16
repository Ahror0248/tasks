// Masalalarni ishlashda arrow functionlardan foydalaning.
// Fasllarga mos oylarni matn ko’rinishida qaytaradigan
// getMonth(fasl) funksiyasini tuzing.



const getMonths = (fasl) =>{
  if (fasl == "spring") return('mart, aprel, may');
  if (fasl == 'summer') return('iyun, iyul, avgust');
  if (fasl == 'autumn') return('sentyabr, oktyabr, noyabr');
  if (fasl == 'winter') return('dekabr, yanvar, fevral');
}
console.log(getMonths('autumn'));
