function solve(arr) {

    let storage = {};

    let tokens = arr[0].split(/\W+/g).filter(x => x !== '');

   for(let word of tokens){

       if(!storage.hasOwnProperty(word)){

           storage[word] = 0;
       }

       storage[word]++;
   }

    console.log(JSON.stringify(storage));
}

solve(['Far too slow, you\'re far too slow.']);