console.log("module 2 is running");

//! import ederken
//? (import { burada ctrl+space yaptığında import yapacakalrını seç} from(hangi js dosyasından getirmek istiyorsan onun ismi))

//? Bir js dosyasından modulleri cekerken tek variable a atayabbiliriz.
//? import {buraya import edecklerimiz   as vereceğimiz isim} from  (hangi js dosyasından getirmek istiyorsan onun ismi)

import { inc } from "./mymodule.js";

console.log("inc(100) :>> ", inc(100));

export function selam() {
  console.log("Selamlar");
}

export default function () {
  console.log("güle güle");
}
