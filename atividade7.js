const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite um número: ', (number) => {

    let digitNumber = parseInt(number);
    let firstTerm = 0;
    let secondTerm = 1;
    let temp = 0;
    let fibonacci = []

    if(isNaN(digitNumber)) {
        console.log("Deve ser digitado um número!");
        rl.close();
        return;
    } else if(digitNumber <= 0){
        console.log("O número digitado deve ser maior que 0!");
        rl.close();
        return;
    }

    for(let i = 0; i < digitNumber; i++) {

        fibonacci.push(firstTerm);
        temp = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = temp;
    }

    console.log("Sequência de Fibonacci: ", fibonacci.join(', '))
    rl.close();
})
