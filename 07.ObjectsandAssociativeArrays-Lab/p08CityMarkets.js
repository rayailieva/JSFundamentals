function solve(arr) {

   let result = new Map();

   for(let line of arr){

       let[town, product, income] = line.split(' -> ')
           .filter(x => x !== '');

       income = income.split(' : ')
           .reduce((a, b) => a * b);

       if(!result.has(town)){

           result.set(town, new Map());
       }

       if(!result.get(town).has(product)){
           result.get(town).set(product,0);
       }

       let oldIncome = result.get(town).get(product);

       result.get(town).set(product, oldIncome + income);
   }

   for(let [town, products] of result){

       console.log(`Town - ${town}`);

       for(let [product, income] of products){

           console.log(`$$${product} : ${income}`);
       }
   }
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);