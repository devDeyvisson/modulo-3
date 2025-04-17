const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(' ---- CONVERSOR DE TEMPERATURA ---- ')
console.log('De Celsius --> Fahrenheit')
console.log('De Fahrenheit --> Celcius')

rl.question("Digite 'C' para Celcius ou 'F' para Fahrenheit: ", (temperature) => {

    let temperatureFormat = temperature.toString().toUpperCase();

    rl.question("Digite o valor:", (valueTemperature) => {

        let valueFormat = parseFloat(valueTemperature)

        switch (temperatureFormat) {
            case 'C':
                console.log('C = ', (valueFormat - 32)/1.8);
                break;
            case 'F':
                console.log('F = ', (valueFormat * 1.8) + 32);  
                break;
            default:
                 console.log('Opção Inválida! Deve ser digitado (C/F). Você digitou ', temperatureFormat); 
        }

        rl.close();
    });
});
