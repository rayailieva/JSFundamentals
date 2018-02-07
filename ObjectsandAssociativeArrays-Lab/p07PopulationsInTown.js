function solve(arr) {

    let result = new Map();

    for(let kvp of arr){

        let[town, population] = kvp.split(' <-> ');

        if(!result.has(town)){

            result.set(town, 0);
        }

        result.set(town, result.get(town) + Number(population));
    }

    for(let [town, pop] of result){
        console.log(`${town} : ${pop}`)
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000',
    'Washington <-> 234',
    'Las Vegas <-> 1000'
]);