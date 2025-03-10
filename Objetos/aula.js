
// OBJETOS DIRETOS.

// // Criando um objeto
// const artur = {
//     nome: 'Artur M Brasileiro',
//     idade: 20,

//     descrever: function() {
//         console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
//     }
// };

// artur.descrever();

// console.log("------------------------------------------------------------")


// console.log(artur.nome);
// console.log(artur.idade);
// console.log(artur);

// console.log("------------------------------------------------------------")

// // Adicionando dados à esse objeto
// artur.altura = 1.75;
// console.log(artur);

// console.log("------------------------------------------------------------")


// // Deletando dados do objeto
// delete artur.altura;
// console.log(artur);



// CLASSES.

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    };
}

const artur = new Pessoa("Artur", 20);
const maria = new Pessoa("Maria", 24);

artur.descrever();
maria.descrever();
