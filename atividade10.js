const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("A organização final dos elementos será da seguinte forma: Os números pares serão colocados antes dos ímpares!")

rl.question("Digite uma sequência de números separados por vírgula:", (numbers) => {
    let listNumbers = numbers.split(', ').map((num) => parseInt(num));

    let even = listNumbers.filter((num) => num % 2 === 0);
    let odd = listNumbers.filter((num) => num % 2 != 0);
    let newListNumbers = even.concat(odd);
    
    console.log("Array reorganizado:", newListNumbers.join(' - '));
    rl.close();
})
