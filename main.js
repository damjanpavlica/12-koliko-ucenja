// VARIJABLE
let satiUcenjaDnevno = 4
const satiDoPocetnika = 2000
const satiDoEksperta = 10000

// LOGIKA
const danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
satiUcenjaDnevno = 8
const danaOdPocetnikaDoEksperta = (satiDoEksperta - satiDoPocetnika) / satiUcenjaDnevno
const danaDoEksperta = danaDoPocetnika + danaOdPocetnikaDoEksperta

// ISPIS
console.log("Potrebno je", danaDoPocetnika, "dana ucenja da bi postao pocetnik.")
console.log("Potrebno je", danaDoEksperta, "dana ucenja da bi postao ekspert.")