const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Digite um número: ', function(number) {

    console.log('O número ecolhido foi o ', number)
    console.log('####TABUADA####')

    for (let index = 0; index < 11; index++) {
        console.log(`${number} * ${index} = ${number * index}`);
    }

    rl.close();
})