const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listEmployees = [];

function displayMenu() {
    console.log("Escolha uma dessas opções: ")
    console.log("Digite 1 para cadastrar um funcionário.")
    console.log("Digite 2 para mostar o funcionário que tem o maior salário.")
    console.log("Digite 3 para listar todos os funcionários.")
    console.log("Digite 4 para sair.")
    rl.question("Qual opção? ", chooseOption)
}

function chooseOption(option) {
    switch(option) {
        case '1':
            registerEmployee();
            break;
        case '2':
            displayHigherSalary();
            break;
        case '3':
            displayEmployees();
            break;    
        case '4':
            console.log("Saindo...") ;
            rl.close();
            break;
        default:
            console.log("Opção inválida!")
            displayMenu();
    }
}

function registerEmployee() {
    rl.question("Informe o  nome do funcionário: ", (name) => {
        rl.question("Informe o  cargo do funcionário: ", (role) => {
            rl.question("Informe o  salário do funcionário: ", (salary) => {
                let employeeName = name.trim();
                let employeeRole = role.trim();
                let employeeSalary = parseFloat(salary);

                if(isNaN(employeeSalary)) {
                    console.log("Opção inválida! O salário deve ser um número!")
                } else {
                    listEmployees.push({name: employeeName, role: employeeRole, salary: employeeSalary})
                }
                displayMenu();
            })
        })
    })
}

function displayHigherSalary() {
    let higherSalary = listEmployees[0];

    listEmployees.forEach((employee) => {
        if(employee.salary > higherSalary.salary) {
            higherSalary= employee;
        }
    })
    console.log(`O funcionário ${higherSalary.name} com o cargo de ${higherSalary.role} possui o maior salário. Sendo ele de R$ ${higherSalary.salary}.`);
    displayMenu();
}

function displayEmployees() {
    console.log("LISTAGEM DE FUNCIONÁRIOS: ");
    listEmployees.forEach((employee, index) => {
        console.log(`Funcionário ${index + 1} - Nome: ${employee.name}, Cargo: ${employee.role} e Salário: R$ ${employee.salary}`);
    });
    displayMenu();
}

displayMenu();