function solve(num) {

    let feet = Number.parseInt(num /12);
    let inches = num % 12;

    console.log(`${feet}'-${inches}"`);
}

solve(11);