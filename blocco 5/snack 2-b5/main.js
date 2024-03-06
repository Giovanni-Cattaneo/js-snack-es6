console.log("Hello world");


const zucchinaVerde = {varietà : "Zucchina verde", peso: 100, lunghezza : 22}
const zucchinaArcobaleno = {varietà : "Zucchina arcobaleno", peso: 75, lunghezza : 20}
const zucchinaViola = {varietà : "Zucchina viola", peso: 200, lunghezza : 30}
const zucchinaBianca = {varietà : "Zucchina bianca", peso: 50, lunghezza : 14}
const zucchinaGialla = {varietà : "Zucchina gialla", peso: 12, lunghezza : 8}



let zucchinePiccole = [zucchinaVerde, zucchinaArcobaleno, zucchinaViola]

let zucchineGrandi = [zucchinaBianca, zucchinaGialla]

let sumPiccole = 0;

let sumGrandi = 0;

zucchinePiccole.forEach(function(zucchina){
    sumPiccole += zucchina.peso
})

console.log(sumPiccole);

zucchineGrandi.forEach(function(zucchina){
    sumGrandi += zucchina.peso
})

console.log(sumGrandi);

