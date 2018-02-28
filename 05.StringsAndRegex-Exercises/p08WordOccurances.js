function solve(string, word) {

    let pattern = new RegExp('\\b' + word + '\\b', 'gi');

    let match = pattern.exec(string);
    let counter = 0;

    while (match !== null) {
        counter++;
        match = pattern.exec(string);
    }

    console.log(counter);
}