console.log("hello world");

const people = [
    {
        nome : "Giovanni",
        cognome : "Cattaneo",
        età : 25,
    },
    {
        nome : "Eleonora",
        cognome : "Cattaneo",
        età : 29,
    },
    {
        nome : "Emma",
        cognome : "Cattaneo",
        età : 15,
    },
    {
        nome : "Luca",
        cognome : "Cattaneo",
        età : 60,
    },
    {
        nome : "emanuela",
        cognome : "Cattaneo",
        età : 55,
    },
]

console.log(people);

people.forEach(person => {

    // console.log(person);
    if (person.età > 18) {
        console.log(person.nome, person.cognome, `può guidare in quanto maggiorenne`);
    } else {
        console.log(person.nome, person.cognome, `non può guidare in quanto minorenne`); 
    }
});