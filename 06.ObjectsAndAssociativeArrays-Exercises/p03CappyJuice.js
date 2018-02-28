function solve(arr) {

    let result = new Map();
    let output = new Map();

    for(let kvp of arr){

        let tokens = kvp.split(' => ')
            .filter(x => x !== '');

        let juice = tokens[0];
        let quantity = Number(tokens[1]);

        if(!result.has(juice)){

            result.set(juice, 0);
        }

        let oldQuantity = result.get(juice);

        result.set(juice, oldQuantity + quantity);

        if(result.get(juice) >= 1000){

            output.set(juice, result.get(juice));
        }

    }

    for (let [juice, quantity] of output) {
        console.log(`${juice} => ${Math.floor(quantity / 1000)}`);
    }

}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);