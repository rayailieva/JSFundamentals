function solve(arr) {

    let result = new Map();

    for(let line of arr){

        let[brand, model, quantity] =
            line.split(' | ').filter(x => x !== '');

        quantity = Number(quantity);

        if(!result.has(brand)){

            result.set(brand, new Map());
        }

        if(!result.get(brand).has(model)){

            result.get(brand).set(model, 0)
        }

        result.get(brand).set(model, quantity);
    }

    for(let [brand, models] of result){

        console.log(`${brand}`);

        for(let [model, quantity] of models){

            console.log(`###${model} -> ${quantity}`);
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);