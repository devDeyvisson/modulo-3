const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let list = [];

function displayMenu() {
    console.log("---> MENU - LISTA DE COMPRAS <---");
    console.log('1- Adicionar produto');
    console.log('2- Remover produto');
    console.log('3- Marcar produto como comprado');
    console.log('4- Listar produtos');
    console.log('5- Sair');
    rl.question("DIGITE O QUE DESEJA FAZER: ", chooseOption);
}

function chooseOption(option) {
    switch (option.trim()) {
        case '1':
            addProduct();
            break;
        case '2':
            removeProduct();
            break;
        case '3':
            markProduct();
            break;
        case '4':
            listProducts();
            break;    
        case '5':
            console.log("Fechando...");
            rl.close();
            break;
        default:
            console.log("Opção inválida!");
            displayMenu(); 
    }
}

function addProduct() {
    rl.question("Informe o nome do produto que deseja cadastrar: ", (name) => {
        rl.question("Informe o preço do produto: ", (price) => {
            let productName = name.trim();
            let priceProduct = parseFloat(price);
            if(isNaN(priceProduct)) {
                console.log("O valor do produto não é um número!")
            } else {
                list.push({name: productName, price: priceProduct, purchased: false});
            }
            displayMenu();
        })
    })
}

function removeProduct() {
    rl.question("Informe o número do produto que você deseja remover(1, 2, 3...): ", (number) => {
        let productNumber = parseInt(number);
        if(isNaN(productNumber) || productNumber <= 0 || list.length < productNumber) {
            console.log("A opção digitada é inválida!")
        } else {
            list.splice(productNumber-1, 1);
        }
        displayMenu();
    })
}

function markProduct() {
    rl.question("Informe o produto que deseja que seja marcado como comprado (1, 2, 3...): ", (number) => {
        let productNumber = parseInt(number)
        if(isNaN(productNumber) || productNumber <= 0 || list.length < productNumber) {
            console.log("A opção digitada é inválida!")
        } else {
            list[productNumber-1].purchased = true;
        }
        displayMenu();
    })
}

function listProducts() {
    console.log("SUA LISTA DE COMPRAS COMPLETA:");
    list.forEach((product, index) => {
        console.log(`Produto ${index+1}: ${product.name}, Valor: R$ ${product.price}, Comprado: ${product.purchased}`)
    })
    displayMenu();
}

displayMenu()