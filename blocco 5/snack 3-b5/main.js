console.log("Hello world");



console.log(reverse("Ciao come va"))

function reverse(phrase) {
    phrase = phrase.split("").reverse().join("")

    return phrase
}