function solve(arr) {

    let result = [];

    for (let i = 0; i < result.length; i++) {

        let tokens = arr[i].split(' / ')
            .filter(x => x !== '');

        let currName = tokens[0];
        let currLevel = Number(tokens[1]);

        let currItems = [];

        if (currItems > 2) {

            currItems = tokens[2].split(', ');

        }

        let hero = {

            name: currName,
            level: currLevel,
            items: currItems
        };

        result.push(hero);

    }

    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun']);