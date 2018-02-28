function solve(arr) {

    let num = arr[0];
    let round = arr[1];

    if(round > 15){
        round = 15;
    }
    num = num.toFixed(round);

    console.log(num);
}
solve([10.5, 3]);