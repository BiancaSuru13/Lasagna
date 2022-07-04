const EXPECTED_MINUTES_IN_OVEN = 40;
const time = 20;
const twoMinutes = 2;
const numberOfLayers = 4;

const restingMinutesInOven = (time)=> {
 return  EXPECTED_MINUTES_IN_OVEN -  time;
}



const remainingTime = restingMinutesInOven(time);
console.log(remainingTime);


const preparationTimeInMinutes = (layers) => {
    return layers * twoMinutes;
}

const preparetionTime = preparationTimeInMinutes(numberOfLayers);
console.log(preparetionTime);

const totalTimeInMinutes = (preparetionTime, cookedTime) => {
    return preparetionTime + cookedTime
}

const result = totalTimeInMinutes( preparetionTime,time );
console.log(result);
