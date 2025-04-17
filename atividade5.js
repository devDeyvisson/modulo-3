const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let isPrime = true;

rl.question("Informe um número: ", (number) => {

    let iputNumber = parseInt(number.trim());

    for(let i=2; i <= Math.sqrt(iputNumber); i++) {
        if(iputNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        console.log(`O número ${iputNumber} é primo!`)
    } else {
        console.log(`O número ${iputNumber} não é primo!`)
    }

    rl.close();
});