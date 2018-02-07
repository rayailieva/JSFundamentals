function solve(arr) {

    let result = new Set();

    for(let name of arr){

        result.add(name);
    }

    result = [...result].sort((a, b) => {
        "use strict";
        if(a.length < b.length) return -1;
        if(a.length > b.length) return 1;
        if(a < b) return -1;
        if(a > b) return 1;
    })

    result.forEach(u => console.log(u));

}

solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
])