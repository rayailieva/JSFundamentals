function solve(target, string) {

    let count = 0;

    let index = string.indexOf(target);

    while (index > -1){

        count++;

        index = string.indexOf(target, index + 1);
    }

    return count;
}