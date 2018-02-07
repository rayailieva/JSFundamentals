function solve(arr) {

    let speed1 = arr[0] * 1000 / 3600;
    let speed2 = arr[1] * 1000 / 3600;

    let distance1 = speed1 * arr[2];
    let distance2 = speed2 * arr[2];

    console.log(Math.abs(distance1 - distance2));

}

solve([0, 60, 3600]);