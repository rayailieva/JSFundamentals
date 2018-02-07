function solve(arr) {

    let regex = /\d+/g;

    let result = [];

    for(let line of arr){

        let match = line.match(regex);

        if (match === null){
            continue;
        }
        for (let num of match) {
            result.push(num);
        }
    }

    console.log(result.join(' '));
}

solve(['aaa', '789b987', '654c321', '0']);