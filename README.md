# montyhallproblem
Zaizi Take-home Challenge: Monty Hall Problem


https://hackmd.io/@fac/rJ4mh7wfc

- Writing a function that takes true or false as an argument: true -> switching doors; false -> sticking to door
- randomly select one of three arrays, which form the three different options of prize selecitons
- randomly choose one door and stick to that door
- if argument = true, switch to another door that is not the previously selected one
 -> if previously selected door is Goat, both Goats are removed, so only car remains
 -> if previously selected door is Car, Car is removed, so only Goats remain
- if sw=true & newDoor = Car -> increase switchWin counter
- if sw=false & door = Car -> increase stickWin counter
- pass function 1000 times, with both true and false
- console.log(stickWin & switchWin)
-> shows how many times out of 1000 switchWin & stickWin was successful
