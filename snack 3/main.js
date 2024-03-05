console.log("hello world");

console.log("hello world");

const animal = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  ]

  const mammal = animal.filter(animal => animal.classe === "mammiferi")

  console.log(mammal);