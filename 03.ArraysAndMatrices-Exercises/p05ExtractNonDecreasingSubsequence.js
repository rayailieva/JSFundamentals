function solve(input) {

    let result = [];
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {

        let current = input[i];

        if(current >= max){

            result.push(current);
            max = current;
        }

    }

    console.log(result.join('\n'));

}