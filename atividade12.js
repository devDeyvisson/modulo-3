let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const student = {
    name: "David",
    age: 20,
    course: "Sistemas de Informação",
    average: 9.5
}

rl.question("Informe a chave (name, age, course ou average) de um aluno, se essa chave estiver presente na objeto será confirmada: ", (key) => {
    let inputKey = key.trim()
    if(inputKey in student) {
        console.log(`A chave ${key} está presente no objeto!`)
    } else {
        console.log(`A chave ${key} não está presente no objeto!`)
    }

    rl.close();
})

