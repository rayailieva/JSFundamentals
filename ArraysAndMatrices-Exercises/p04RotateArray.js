function solve(input) {

    let rotations = Number(input.pop());

    rotations = rotations % input.length;

    for (let i = 0; i < rotations; i++) {

        input.unshift(input.pop());
    }

    console.log(input.join(' '));

}