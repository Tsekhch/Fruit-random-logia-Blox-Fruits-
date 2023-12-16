class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.fruits = [];
    }

    attackEnemy() {
        return Math.floor(Math.random() * (20 - 10 + 1) + 10);
    }

    eatFruit(fruit) {
        this.fruits.push(fruit);
        displayOutput(`${this.name} ate a ${fruit} fruit! Power increased!`);
    }

    displayStatus() {
        displayOutput(`${this.name}'s Status:<br>Health: ${this.health}<br>Fruits: ${this.fruits.join(', ')}`);
    }
}

function encounterEnemy() {
    let enemyHealth = 50;
    displayOutput("You encountered an enemy!");

    while (enemyHealth > 0 && player.health > 0) {
        let choice = prompt("1. Attack\n2. Run away");

        if (choice === "1") {
            let playerDamage = player.attackEnemy();
            enemyHealth -= playerDamage;
            displayOutput(`You dealt ${playerDamage} damage to the enemy!`);

            let enemyDamage = Math.floor(Math.random() * (15 - 5 + 1) + 5);
            player.health -= enemyDamage;
            displayOutput(`The enemy dealt ${enemyDamage} damage to you!`);
        } else if (choice === "2") {
            displayOutput("You ran away from the enemy.");
            break;
        } else {
            displayOutput("Invalid choice. Try again.");
        }
    }

    if (player.health <= 0) {
        displayOutput("Game over. You were defeated.");
    } else {
        displayOutput("You defeated the enemy!");
    }
}

function eatFruit() {
    const availableFruits = ["Magma", "Ice", "Flame", "Rubber"];
    const chosenFruit = availableFruits[Math.floor(Math.random() * availableFruits.length)];
    player.eatFruit(chosenFruit);
}

function displayStatus() {
    player.displayStatus();
}

function quitGame() {
    displayOutput("Thanks for playing! See you next time.");
    document.getElementById("actions").innerHTML = "";
}

function displayOutput(message) {
    document.getElementById("output").innerHTML = message;
}

const playerName = prompt("Enter your name:");
const player = new Player(playerName);
displayOutput(`Welcome, ${player.name}! You find yourself in the world of Blox Fruits.`);
