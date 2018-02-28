function solve(input) {

    input = input.map(Number);

    let isBuild = false;
    let result = [];

    while(!isBuild){

        let concrete = 0;
        isBuild = true;

        for (let i = 0; i < input.length; i++) {

            if(input[i] < 30){

                input[i]++;
                concrete += 195;
                isBuild = false;
            }
        }

        if(!isBuild){
            result.push(concrete);
        }
    }

    console.log(result.join(', '));
    console.log(result.reduce((a, b) => a+b,0)* 1900 + ' pesos');

}

solve([21, 25, 28]);