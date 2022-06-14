const prizes = [
  ["Goat", "Goat", "Car"],
  ["Goat", "Car", "Goat"],
  ["Car", "Goat", "Goat"],
];

let stickWin = 0;
let switchWin = 0;

// sw true = switch door
// sw false = stick to door

montyHall = (sw) => {
  // pick prize selection randomly
  const pickedPrize = Math.floor(Math.random() * 3);
  let prizeSelection = prizes[pickedPrize];
  // console.log(prizeSelection)

  // pick door randomly
  const pickedDoor = Math.floor(Math.random() * 3);
  // console.log(pickedDoor)
  let door = prizeSelection[pickedDoor];
  // console.log(door);

  if (sw == true) {
    //remove picked door

    const newDoor = prizeSelection.filter(
      (x) => x !== prizeSelection[pickedDoor]
    );
    // console.log(newDoor)
    //if picked door is goat, the door revealed will also be goat -> therefore only car is left
    //if picked door is car, and player chooses different door, loses either way

    if (newDoor == "Car") {
      return (switchWin += 1);
    }
  } else if (sw == false && door == "Car") {
    return (stickWin += 1);
  }
};


//pass function 100 times with false; pass it 100 times with true
// counter with return true or false

for (var i = 1; i < 1000; i++) montyHall(false);

for (var i = 1; i < 1000; i++) montyHall(true);

console.log(stickWin);
//this shows how many times out of 1000 stickWin was successful
console.log(switchWin);
//this shows how many times out of 1000 switchWin was successful

