function solve(num) {

    let celsius = num * 0.9 % 360;

    if (celsius < 0) {
        celsius = 360 - Math.abs(celsius);
    }

    console.log(celsius);
}

solve(100);

