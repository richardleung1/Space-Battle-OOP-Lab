// Space Battle OOP Lab

// Build a game of battling alien spaceships using Javascript.

// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed
// If you retreat, the game is over

// Ship Properties
// hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target

// Create a class named Ship
// Constructor method with properties hull, firepower, and accuracy

// ships attack each other until one of them has been destroyed
// create an attack method with loops

// If you destroy the ship, you have the option to attack the next ship or to retreat






// Your spaceship, the USS Assembly should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7

// Create a spaceship with the above properties


// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8

// Use a loop to create an array with 6 alien ships with ranged properties determined randomly

// Example use of accuracy to determine a hit:
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }