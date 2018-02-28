function solve(arr) {

    let result = new Map();

    for(let line of arr){

        let[town, product, price ] = line
            .split(' | ')
            .filter(x => x !== '');

        if(!result.has(product)){

            result.set(product, new Map());
        }

            result.get(product).set(town, Number(price));
    }

    for(let [product, towns] of result){

        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';

       for(let [town, price] of towns){

           if(price < minPrice){

               minPrice = price;
               minPriceTown = town;
           }
       }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }

}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);