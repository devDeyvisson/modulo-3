console.log("### CALCULADORA SIMPLES ###")

console.log('Digite a operação que desja relizar:');
console.log("(+) -> ADIÇÃO")
console.log("(-) -> SUBTRAÇÃO")
console.log("(*) -> MULTIPLICAÇÃO")
console.log("(/) -> DIVISÃO")

process.stdin.on('data', function(data) {

    let sign = data.toString().trim();

    process.stdout.write('Digite o primeiro número: ');

    process.stdin.once('data', function(data) {
    
        let firstNum = parseFloat(data).trim();

        process.stdout.write('Digite o segundo número: ');

        process.stdin.once('data', function(data) {
        
            let secondNum = parseFloat(data).trim();

            if(isNaN(firstNum) || isNaN(secondNum)) {
                console.log("Números inválidos!");
                process.exit();
            }

            if(sign === '+'){
                console.log(`Resultado: ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
                process.exit();
            } else if(sign === '-') {
                console.log(`Resultado: ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
                process.exit();
            } else if(sign === '*') {
                console.log(`Resultado: ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
                process.exit();
            } else if(sign === '/') {
                if(secondNum === 0) {
                    console.log("Não é possivel realizar divisão por 0!")
                    process.exit();
                } else {
                    console.log(`Resultado: ${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
                    process.exit();
                }
            } else {
                console.log('Operação inválida!');
                process.exit();
            }
        });
    });
});

