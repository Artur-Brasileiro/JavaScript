const familia = ["Artur", "Maria", "Sandra"];

console.log(familia[0]);

// Adicionando elemento
familia.push("Jucilene");
console.log(familia);

// Removendo o ultimo elemento
familia.pop();
console.log(familia);

console.log("--------------------------------------")

for (let i = 0; i < familia.length; i++) {
    console.log(familia[i]);
}
