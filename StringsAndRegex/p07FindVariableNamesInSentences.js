function solve(string) {

    let regex = /\b((?:_)[a-zA-Z0-9]+)\b/gm;

    let result = '';

   let match = regex.exec(string);

   while (match !== null){
       result.push(match[1]);

       match = regex.exec(string);
   }

   console.log(result.join(','));
}
