// function add(n1, n2) {
//   return n1 + n2;
// }

// const WORKING_HOURS_WEEK = 40; // 45 , 30

// let counter = 0;
// let localCounter = 0;

// function inc(amount = 1) {
//   counter += amount;
//   return counter;
// }

// function dec(amount = 1) {
//   counter -= amount;
//   return counter;
// }

// const moduleName = "Module 1";
// // export default moduleName;

// // export default (num) => num * num; //! Bı export bu modulden bir veri istenilmese bile en azından bunu kullan Ve yanlız bir kez kullanılıyor.Bir yerde birden çok export default kullanırsak son yazdığımız export default değerini alır.

// //! Dışarıdan kullanılmasını istediğimiz herşeyin başına export ekliyoruz. Eğer export yapmazsak module dışından erişilemez export edilmeyen verilere

// export {
//   WORKING_HOURS_WEEK,
//   WORKING_HOURS_WEEK as WHW, //! as ile export yaptığımız değişkeni isimini değiştirmemizi sağlar
//   add as sum,
//   inc,
//   dec,
//   counter,
// };

// console.log("module 1 is loaded");

// function topla(n1, n2) {
//   return n1 + n2;
  
// }

// const HAFTALIK_CALISMA = 40;

// let artma = 0;

// let localArtma = 0;

// function attir(amount = 1) {
//   artma += amount;
//   return artma;
// }


// function azalt(amount = 1) {
//   azalt -= amount;
//   return azalt;
// }


// const moduleName1 = "Module 1";

// export default (num) => num * num;


// export {
//   HAFTALIK_CALISMA as WORK,
//   attir as sum1,
//   azalt as az,
//   artma  as say

// } //! bunaları export ettik ve diğer js dosyalarına import edebiliriz.



function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45 , 30

let counter = 0;
let localCounter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

const moduleName = "Module 1";
// export default moduleName;

// export default (num) => num * num; //! Bı export bu modulden bir veri istenilmese bile en azından bunu kullan Ve yanlız bir kez kullanılıyor.Bir yerde birden çok export default kullanırsak son yazdığımız export default değerini alır.

//! Dışarıdan kullanılmasını istediğimiz herşeyin başına export ekliyoruz. Eğer export yapmazsak module dışından erişilemez export edilmeyen verilere

export {
  WORKING_HOURS_WEEK,
  WORKING_HOURS_WEEK as WHW, //! as ile export yaptığımız değişkeni isimini değiştirmemizi sağlar
  add as sum,
  inc,
  dec,
  counter,
};

console.log("module 1 is loaded");

function topla(n1, n2) {
  return n1 + n2;
  
}

const HAFTALIK_CALISMA = 40;

let artma = 0;

let localArtma = 0;

function attir(amount = 1) {
  artma += amount;
  return artma;
}


function azalt(amount = 1) {
  azalt -= amount;
  return azalt;
}


const moduleName1 = "Module 1";

export default (num) => num * num;


export {
  HAFTALIK_CALISMA as WORK,
  attir as sum1,
  azalt as az,
  artma  as say

} //! bunaları export ettik ve diğer js dosyalarına import edebiliriz.