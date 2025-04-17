let populationA = 80000;
let populationB = 200000;
let year = 0;

while(populationA <= populationB) {

    populationA = populationA + (populationA * 0.03);
    populationB = populationB + (populationB * 0.015);
    year++;

    console.log(`No ano ${year} - Crescimento populacional de A: ${Math.round(populationA)} e B: ${Math.round(populationB)}`);
}

console.log(`A população de A levou ${year} anos para ser maior que B.`)