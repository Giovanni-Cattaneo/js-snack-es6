console.log("Hello world");

// i pesi sono in kilogrammi

const bikes = [
    {nome : "mountan bike", peso: 5},
    {nome : "mountan bike", peso: 10},
    {nome : "mountan bike", peso: 12},
    {nome : "mountan bike", peso: 8},
    {nome : "mountan bike", peso: 7},
]

const [{peso}] = bikes

console.log(peso);

let weigth = 100;

bikes.forEach(function (bike){

    if (peso < weigth ) {
        weigth = peso
        console.log(`la bici che pesa meno è una ${bike.nome} e pesa ${weigth} kili`);
    }
})


