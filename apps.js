const prizes = [
    ["Goat", "Goat", "Car"],
    ["Goat", "Car", "Goat"],
    ["Car", "Goat", "Goat"]
];


let stickWin = 0;
let stickLose = 0;
let switchWin = 0;
let switchLose = 0;



montyHall= (sw) => {
    
// pick prize selection randomly
const pickedPrize = Math.floor(Math.random()*3);
let prizeSelection = prizes[pickedPrize];
console.log(prizeSelection)

// pick door randomly
const pickedDoor = Math.floor(Math.random()*3);
console.log(pickedDoor)

let door = prizeSelection[pickedDoor];
console.log(door);

if (sw == false) {


} else if (sw == true) {
    // 
    //pick door that is not let door & not car
// let switchDoor = 
//if switchDoor = Car, a
}

if (door == "Car") {
    return stickWin +=1
    }

}
console.log(montyHall(false));

//pass function 100 times with false; pass it 100 times with true
// counter with return true or false





