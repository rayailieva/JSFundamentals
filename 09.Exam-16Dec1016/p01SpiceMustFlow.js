function solve(yield) {

    yield = Number(yield);
    let days = 0;
    let total = 0;

    while(yield >= 100){

        total += yield;
        yield -= 10;
        days++;

        total -= 26;

    }

    if(total >= 26){

        total -= 26;
    }

    console.log(days);
    console.log(total)
}

solve('111');