function solve(input) {

    let result = [];

    let instructionSet = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b

    };

    for(let i of input){
        let instruction = instructionSet[i];

        if(instruction === undefined){

            result.push(i);
        }else{

            let[num1, num2] = [result.pop(), result.pop()];

            if(num1 === undefined || num2 === undefined){

                console.log('Error: not enough operands!');
                return;
            }

            result.push(instruction(num1, num2));
        }
    }

    if (result.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(result.pop());
    }
}

solve([31,
    2,
    '+',
    11,
    '/']
);