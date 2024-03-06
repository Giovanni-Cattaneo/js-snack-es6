console.log("Hello world");

const teams = [
    {nome: "Inter", punti: 0, falliSubiti: 0,},
    {nome: "milan", punti: 0, falliSubiti: 0,},
    {nome: "juve", punti: 0, falliSubiti: 0,},
    {nome: "fiorentina", punti: 0, falliSubiti: 0,},
    {nome: "torino", punti: 0, falliSubiti: 0,},
]

let [{punti}] = teams

let [{falliSubiti}] = teams

teams.forEach(function (team){
    punti = getRandomIntInclusive(1,10)

    falliSubiti = getRandomIntInclusive(10,50)

    team.falliSubiti = falliSubiti

    team.punti = punti

    console.log(team);

    //delete team.falliSubiti metodo valido, funziona
})

const newTeams= teams.map(function({falliSubiti, ...rest}){// questa funzione ci permette di escludere la variabile e prendere il rest facendo return solo delle altre proprietà dell'array 
    return rest
})

console.log(newTeams);


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }