let random = Math.floor(Math.random() * 10) + 1;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log('Número gerado: ', random)

console.log('Seja muito bem-vindo(a) ao jogo de Adivinhação!');
console.log('Tente Adivinhar um número de 1 a 10.');

rl.setPrompt('Digite um número: ');
rl.prompt();

rl.on('line', function(responseUser) {

    let inputNumber = parseInt(responseUser);

    if(random === inputNumber) {
        console.log('Parabéns, você acertou! O numero é ', random, '.');
        process.exit();
    } else if (isNaN(inputNumber)){
        console.log('Número inválido! Por favor, digite um número válido!');
    } else {
        console.log('Você errou! Digite outro número!');
    }
})


