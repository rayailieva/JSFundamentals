function solve(arr) {

    let allStrings = arr.join('');
    let chars = Array.from(allStrings);
    let revChars = chars.reverse();
    let revStr = revChars.join('');

    console.log(revStr);

}


solve(['race', 'car']);
solve(['I', 'am', 'student']);
