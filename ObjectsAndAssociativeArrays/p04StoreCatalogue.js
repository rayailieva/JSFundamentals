function solve(arr) {

    let result = new Map();

    for(line of arr){

        let [product, price] =
                 line.split(' : ')
                .filter(x => x !== '');

        price = Number(price);
        let letter = product[0];

        if(!result.has(letter)){

            result.set(letter, new Map());
        }

        if(!result.get(letter).has(product)){

            result.get(letter).set(product, 0);
        }

            result.get(letter).set(product,price);
    }

    result = [...result].sort();

    for(let [letter, products] of result){

        console.log(`${letter}`);

        products = [...products].sort((a, b) => a[0].localeCompare(b[0]));

        for(let [product, price] of products){

            console.log(`  ${product}:${price}`);
        }
    }
}

solve([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);