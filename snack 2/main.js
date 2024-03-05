console.log("hello world");

const firstArray = ["qui", "QUO", "Qua", "Pluto"]

const formatArray = firstArray.map(word => {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1) // questo ci permette di cambiare tutti i caratteri in piccolo,tranne il carattere alla posizione array 0 che viene messo in maiuscolo, poi aggiungiamo di seguito gli altri caratteri tranne il carattere 1 che viene tagliato altrimenti sarebbe ripetutto

})

console.log(formatArray);
