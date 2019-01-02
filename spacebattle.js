// USS Assembly Character sheet 
let ussAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: 7,
}

// class for alien ships to randomly generate accuracy, hull, and damage.
class ships {
    constructor(name) {
        this.alienHp = 0,
            this.alienDmg = 0,
            this.alienAcc = 0,
            this.alienHull = function(min, max) {
                return this.alienHp = Math.floor(Math.random() * (max - min) + min);
            }
        this.alienFirepower = function(min, max) {
            return this.alienDmg = Math.floor(Math.random() * (max - min) + min);
        }
        this.alienHit = function(min, max) {
            return this.alienAcc = Math.floor(Math.random() * (max - min) + min);
        }
        this.alienHull(3, 7)
        this.alienFirepower(2, 5)
        this.alienHit(6, 9)
    }
}
// array to hold alien ships and a for loop to create 6 of them
let alienFleet = []
for (let i = 0; i < 6; i++) {
    alienFleet.push(newAlien = new ships("alien"))
}
let choiceTime = false
// function to contain if statements for simulating a dice roll for the alien attack turn, console logging for recording a hit, and Game Over dialogue.
alienRoll = function() {
    if (Math.random() * 10 <= alienFleet[0].alienAcc) {
        ussAssembly.hull -= alienFleet[0].alienDmg
        console.log("The aliens scored a hit for " + alienFleet[0].alienDmg + " damage!", "The USS Assembly's hull is now at " + ussAssembly.hull + ".")
    } else(console.log("The aliens returned fire, and narrowly missed!"))
    if (ussAssembly.hull <= 0) {
        console.log("GAME OVER. THE ALIENS HAVE DESTROYED THE USS ASSEMBLY AND NOW THEY'RE HEADED TO EARTH AND MAN THINGS DON'T LOOK GOOD FOR THE REST OF ALL HUMANITY. TELL YOUR LOVED ONES HOW MUCH THEY MEAN TO YOU AND ENJOY A NICE MEAL AND QUALITY TIME WITH FRIENDS AND FAMILY, BECAUSE THIS IS ALMOST CERTAINLY THE END.")
    }
}

// function to contain if while statements for conditions under which the game should run, logging the damage done to/from the USS Assembly, and console logging when the game is over.
ussRoll = function() {
    console.log("An Alien Ship is approaching the USS Assembly!")
    while (alienFleet.length > 0 && ussAssembly.hull > 0 && choiceTime == false) {
        if (Math.random() * 10 <= ussAssembly.accuracy) {
            alienFleet[0].alienHp -= ussAssembly.firepower;
            console.log("The USS Assembly connected for " + ussAssembly.firepower + " damage!")
        } else(console.log("The USS Assembly failed to hit it's target!"))
        if (alienFleet[0].alienHp <= 0) {
            console.log("Alien Ship destroyed!")
            alienFleet.shift()
            choiceTime = true
            if (alienFleet.length <= 0) {
                console.log("Congratulations you've liberated all of humanity and made sure all of the very, very bad aliens are definitely, absolutely dead, and leave no possible room for a sequel.")
            }

        } else(alienRoll())
    }
}



// Used to initialize game
ussRoll()

// jQuery for how the buttons should behave
$('.No').click(function() {
    choiceTime = false
    ussRoll()
    if (alienFleet.length <= 0) {
        $("button").hide()
        $(".Coward").text("Refresh the page to play again!")
        $("div").hide()
    }
});
$(".Yes").click(function() {
    $(".Coward").text("GAME OVER. GO HOME.")
})