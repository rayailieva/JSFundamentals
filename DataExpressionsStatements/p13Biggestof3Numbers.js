function solve([num1, num2, num3]) {

    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let biggest = num1;

    if(num2 > num1){

        biggest = num2;
    }

    if(num3 > num2 && num3 > num1 ){

        biggest = num3;
    }


    console.log(biggest)
}

solve(130, 5, 99)