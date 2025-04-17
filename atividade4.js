const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Informe o primeiro número: ', (firstNumber)=> {

    rl.question('Informe o segundo número: ', (secondNumber)=> {

        rl.question('Informe o terceiro número: ', (thirdNumber)=> {
            
            let biggestNumber;

            if(firstNumber > secondNumber && firstNumber > thirdNumber) {
                biggestNumber = firstNumber;
            } else if(secondNumber > thirdNumber) {
                biggestNumber = secondNumber;
            } else {
                biggestNumber = thirdNumber;
            }

            console.log('O maior número foi: ' + biggestNumber);
            rl.close();
        });
    });
});