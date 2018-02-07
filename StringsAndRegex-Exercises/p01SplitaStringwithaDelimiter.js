function solve(string, delimiter) {

    let words = string.split(delimiter);

    console.log(words.join('\n'));
}

solve('One-Two-Three-Four-Five', '-');