// Space Battle OOP Lab

// Build a game of battling alien spaceships using Javascript.

// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed
// If you retreat, the game is over

// Ship Properties
// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target

// Create a class named Ship
// Constructor method with properties hull, firepower, and accuracy
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

// ships attack each other until one of them has been destroyed
// create an attack method with loops

// Example use of accuracy to determine a hit:
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }
    
    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull = Math.max(0, target.hull - this.firepower)
            console.log(`${this.name} hit ${target.name}.`)
            console.log(`${target.name} taken ${this.firepower} damage.`)
        } else {
            console.log(`${this.name} has missed.`)
        }
    }
}
// If you destroy the ship, you have the option to attack the next ship or to retreat




// Your spaceship, the USS Assembly should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7


// Create a spaceship with the above properties
const playerShip = new Ship('USS Schwarzenegger', 20, 5, .7)
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8

// Use a loop to create an array with 6 alien ships with ranged properties determined randomly
function createEnemies() {
    const ships = []
    for (let i = 1; i < 7; i++) {
        let hull = Math.floor(Math.random() * 4) + 3
        let firepower = Math.floor(Math.random() * 3) + 2
        let accuracy = Math.round(Math.random() * 2) / 10 + .6
        let newAlienShip = new Ship('Alien Ship ' + i, hull, firepower, accuracy)
        ships.push(newAlienShip)
    }
    return ships
}
let alienShips = []


// function to change name and stats display
function changeStats() {
    const br = document.createElement("br")
    playerName.textContent = playerShip.name
    playerStats.textContent = `Hull:${playerShip.hull} FirePower:${playerShip.firepower} Accuracy:${playerShip.accuracy} `

    alienName.textContent = alienShips[alienCount].name
    alienStats.textContent = `Hull:${alienShips[alienCount].hull} FirePower:${alienShips[alienCount].firepower} Accuracy:${alienShips[alienCount].accuracy} `
}

function battle() {
    playerStats.removeEventListener('click', battle)
    while (playerShip.hull > 0 && alienShips[alienCount].hull > 0) {
        playerShip.attack(alienShips[alienCount])
        changeStats()
        if (alienShips[alienCount].hull > 0) {
            alienShips[alienCount].attack(playerShip)
            changeStats()
        }
    }
    if (playerShip.hull > 0 && alienShips[alienCount].hull === 0) {
        alienCount++
        if (alienCount < 6) {
            continueBattle()
        } else if (alienCount === 6) {
            playerStats = 'Start'
            playerStats.addEventListener('click', startGame)
            alert(`Congratulations. You have destroyed all enemy alien ships.`)

        }
    } else if (playerShip.hull === 0){
        alert('Game Over. You have lose.')
    }
}

function continueBattle() {
    if (alienCount === 1) {
        console.log(`You have destroyed ${alienCount} alien ship. Continue or retreat?`)
    } else {
        console.log(`You have destroyed ${alienCount} alien ships. Continue or retreat?`)
    }
    
    playerStats.textContent = 'Continue'
    playerStats.addEventListener('click', battle)

    alienStats.textContent = 'Retreat'
    alienStats.addEventListener('click', retreat)
}

function retreat() {
    console.log('You choose to retreat and survive. But at what cost?')
}

function startGame() {
    alienCount = 0
    alienShips = createEnemies()
    playerStats.removeEventListener('click', startGame)
    battle()
}

const playerName = document.querySelector('.playerNameBox')
const playerStats = document.querySelector('.playerStats')
playerStats.addEventListener('click', startGame)

let alienCount = 0
const alienName = document.querySelector('.enemyNameBox')
const alienStats = document.querySelector('.enemyStats')

