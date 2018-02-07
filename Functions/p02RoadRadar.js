function solve([speed, area]) {

    if(area === "motorway"){

        if(speed >= 130 && speed <= 150){

            console.log("speeding");
        }
        if(speed > 150 && speed <= 170){

            console.log("excessive speeding");
        }
        if(speed > 170){

            console.log("reckless driving");
        }
    }
    if(area === "interstate"){

        if(speed >= 90 && speed <= 110){

            console.log("speeding");
        }
        if(speed > 110 && speed <= 130){

            console.log("excessive speeding");
        }
        if(speed > 130){

            console.log("reckless driving");
        }
    }
    if(area === "city"){

        if(speed >= 50 && speed <= 70){

            console.log("speeding");
        }
        if(speed > 70 && speed <= 90){

            console.log("excessive speeding");
        }
        if(speed > 90){

            console.log("reckless driving");
        }
    }
    if(area === "residential"){

        if(speed >= 20 && speed <= 40){

            console.log("speeding");
        }
        if(speed > 40 && speed <= 60){

            console.log("excessive speeding");
        }
        if(speed > 60){

            console.log("reckless driving");
        }
    }
}

solve([21, 'residential']);