function solve(arr) {

    let record = {};

    for (let i = 0; i < arr.length; i+2) {

        let town = arr[i];
        let income = arr[i +1];

        if(!record.hasOwnProperty(town)){

            record[town] = 0;
        }

        record[town] += Number(income);

    }

    console.log(JSON.stringify(record));
}

solve([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);