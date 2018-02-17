function solve(input) {

    let result = new Map();

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split('-').filter(x => x !== ' ');

        if(tokens.length === 1){

            let person = tokens[0];

            if(!result.has(person)){

                result.set(person, {subscriber: [], subscribers: []});
            }else{
                continue;
            }
        }
        else if(tokens.length === 2){

            let [subscriber, subscribedTo] = tokens;

            if(subscriber === subscribedTo){

                continue;
            }
            if(result.has(subscriber) && result.has(subscribedTo)){

                result.get(subscribedTo).subscribers.push(subscriber);
                result.get(subscriber).subscriber.push(subscribedTo);
            }

        }

    }

    result = [...result].sort((a, b) => {
        "use strict";

        if(b[1].subscribers.length < a[1].subscribers.length) return -1;
        if (b[1].subscribers.length > a[1].subscribers.length) return 1;
        if (b[1].subscriber.length < a[1].subscriber.length) return -1;
        if (b[1].subscriber.length > a[1].subscriber.length) return 1;
    });

    for(let [person, data] of result){

        console.log(person);

        let count = 1;
        for (let subs of data.subscribers) {
            console.log(`${count}. ${subs}`);
            count++;
        }
        return;
    }
}