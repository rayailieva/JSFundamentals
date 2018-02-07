function solve(input) {

   let num = 1;
    let result = [];

    for (let i = 0; i < input.length; i++) {

        if(input[i] === 'add'){
            result.push(num);
            num++;
        }
        else{
            result.pop(num);
            num++;
        }
    }
    if(result.length === 0){
        console.log("Empty");
    }

    console.log(result.join('\n'));
}

solve(['remove', 'remove', 'remove']);