let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let listUsers = [
    {name: "Samuel", email: "samuel@gmail.com", age: 25},
    {name: "Lucas", email: "lucas@gmail.com", age: 33},
    {name: "Bruna", email: "bruna@gmail.com", age: 21},
    {name: "Orlando", email: "orlando@gmail.com", age: 30},
    {name: "Karoline", email: "karol@gmail.com", age: 27},
];

rl.question("Digite o email que deseja buscar:", (email) => {

    let emailUser = email.trim();

    let foundUser = searchUserByEmail(emailUser);

    if(foundUser) {
        console.log("O usuário está presente na lista!");
        console.log(`${foundUser.name}, idade: ${foundUser.age} e email: ${foundUser.email}`);
    } else {
        console.log("O usuário não está presente na lista!")
    }

    rl.close();
})

function searchUserByEmail(email) {
    return listUsers.find(user => user.email === email);
}