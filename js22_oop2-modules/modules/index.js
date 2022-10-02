// console.log("JS Modules is running");

// import karesi, {
//   WHW as W,
//   WORKING_HOURS_WEEK,
//   dec,
//   inc,
//   sum,
//   counter,
// } from "./mymodule.js";
// import ugurla, { selam } from "./module2.js";

// // import { default as karesi, WHW, WORKING_HOURS_WEEK, dec, inc, sum, counter } from './mymodule.js';

// // console.log("W :>> ", W);
// // console.log("WORKING_HOURS_WEEK :>> ", WORKING_HOURS_WEEK);
// // console.log("karesi(4) :>> ", karesi(4));

// inc(4);
// inc(6);
// dec();
// console.log("dec() :>> ", dec());
// inc();
// console.log("counter :>> ", counter);
// // counter = 29; // ! sabit gibi davranır
// inc();
// console.log("counter :>> ", counter);
// selam();
// ugurla();




// import karesi, {
//   WHW as W,  //! İSMİ BURADADA DEĞİŞTİREBİLİYORUZ
//   WORKING_HOURS_WEEK,
//   dec,
//   inc,
//   sum,
//   counter,
// } from "./mymodule.js";
// import ugurla, { selam } from "./module2.js"; //! karesi default bir değer verdiği için süslünün başına yada sonuna yazıyoruz.


// // import { default as karesi, WORK, az, sum1, say } from "./mymodule" //! Buraya module.js den modulleri import ettik buraya cağırdık onları burada kullanmak için

// import karesi, { WORK, az, sum1, say } from "./mymodule.js" //! Buraya module.js den modulleri import ettik buraya cağırdık onları burada kullanmak için


// console.log('WORK :>> ', WORK);
// console.log('WORKING_HOURS_WEEK :>> ', WORKING_HOURS_WEEK);
// console.log('karesi(4) :>> ', karesi(4));


console.log("JS Modules is running");
import karesi, {WHW, WORKING_HOURS_WEEK, dec, inc, sum, counter} from './mymodule.js';
// import { default as karesi, WHW, WORKING_HOURS_WEEK, dec, inc, sum, counter} from './mymodule.js'
// console.log('WHW : >>', WHW)
// console.log('WORKING_HOURS_WEEK : >>', WORKING_HOURS_WEEK);
// console.log('karesi(4) :>>', karesi(4));


inc(4);
inc(6);
dec();
inc();
console.log('dec() :>> ', dec()); //? 8

// counter = 29; //? Hata verir çünkü bu değişken başka modulden import edildi. Bu yüzden değiştirilemez const gibi davranır. Ama oluşturulan modulde değiştirilebilir.
inc();
console.log('counter :>> ', counter);  //? 10





