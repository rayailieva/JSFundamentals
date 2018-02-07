function solve(arr) {

    let x1 = arr[0];
    let y1 = arr[1];
    let z1 = arr[2];
    let x2 = arr[3];
    let y2 = arr[4];
    let z2 = arr[5];

    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z1 - z2) **2);

    console.log(distance)
}

solve([1, 1, 0, 5, 4, 0]);
