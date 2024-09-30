
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = "";
let quantidadeXP = 0;

rl.question("Digite seu nome: ", (inputNome) => {
    nome = inputNome;

    rl.question("Qual sua experiência? ", (inputQuantidadeXP) => {
        quantidadeXP = parseInt(inputQuantidadeXP);

        let nivel = "";
        if (quantidadeXP < 1000) {
            nivel = "Ferro";
        } else if (quantidadeXP >= 1000 && quantidadeXP < 2000) {
            nivel = "Bronze";    
        } else if (quantidadeXP >= 2000 && quantidadeXP < 5000) {
            nivel = "Prata";
        } else if (quantidadeXP >= 5000 && quantidadeXP < 7000) {
            nivel = "Ouro";
        } else if (quantidadeXP >= 7000 && quantidadeXP < 8000) {
            nivel = "Platina";
        } else if (quantidadeXP >= 8000 && quantidadeXP < 9000) {
            nivel = "Ascendente";
        } else if (quantidadeXP >= 9000 && quantidadeXP < 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        rl.close();
    });
});
