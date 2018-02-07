function solve(arr) {

    let result = new Map();

    for(let line of arr){

        let[system, component, subcomponent] = line
            .split(' | ').filter(x => x !== '');

        if(!result.has(system)){

            result.set(system, new Map());
        }

        if(!result.get(system).has(component)){

            result.get(system).set(component,[]);
        }

        result.get(system).get(component).push(subcomponent);

    }

    result = [...result].sort((a,b) => {
        "use strict";
        if (a[1].size > b[1].size) return -1;
        if (a[1].size < b[1].size) return 1;
        if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    });

    for(let [system, components] of result){

        console.log(`${system}`);

        components = [...components].sort((a, b) => {
            if (a[1].length > b[1].length) return -1;
            if (a[1].length < b[1].length) return 1;
        });

        for(let [component, subcomponent] of components){

            console.log(`|||${component}`);

            for(let sub of subcomponent) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);