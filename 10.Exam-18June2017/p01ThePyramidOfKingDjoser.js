function solve(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let steps = 1;

    while(base > 0){

        if(base === 1 || base === 2){

            gold = (base ** 2) * increment;
            break;
        }

        let decorations = (base * 4) - 4;
        let bulk = (base ** 2) - decorations;

        stone += bulk * increment;

        if(steps % 5 === 0){

            lapis += decorations * increment
        }
        else{

            marble += decorations * increment;
        }

        steps++;
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
solve(12,1);