console.log("Hello world");

// i pesi sono in grammi la lunghezza in cm

const zucchines = [
{varietà : "Zucchina verde", peso: 100, lunghezza : 22},
{varietà : "Zucchina arcobaleno", peso: 75, lunghezza : 20},
{varietà : "Zucchina viola", peso: 200, lunghezza : 30},
{varietà : "Zucchina bianca", peso: 50, lunghezza : 15},
{varietà : "Zucchina gialla", peso: 12, lunghezza : 8},
]

console.log(zucchines);

let sum = 0;

zucchines.forEach(zucchina => {
    sum += zucchina.peso
}) 

console.log(sum);