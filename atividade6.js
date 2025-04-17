const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Informe um número: ", (number) => {
    
    let inputNumber = parseInt(number);
    let fatorial = 1;

    for (let index = 2; index <= inputNumber; index++) {
        fatorial *= index;
    }

    console.log(`O fatorial de ${inputNumber} é:`, fatorial);
    rl.close();
})