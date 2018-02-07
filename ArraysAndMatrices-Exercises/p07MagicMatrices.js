function solve(input) {

    let isMagic = false;

    for (let row = 0; row < input.length; row++) {
        for(let col = 0; col < input[row].length; col++){

            if(input[row].reduce((a, b) => a + b) ===
                input[col].reduce((a, b) => a + b )){

                isMagic = true;

            }
        }

    }

    console.log(isMagic);
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

);