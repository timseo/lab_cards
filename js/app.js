console.log('Connection established!')

//////////////////////////////////
//           PART 1             //
//////////////////////////////////

// Make a deck of cards.

// 1. Make an array of suits.
var suits = ['hearts', 'spades', 'clubs', 'diamonds']
// 2. Make an array of values.
var values = [2, 3, 4, 5, 6 , 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

// 3. Write a constructor function for Card which takes two arguments, suit and val. Include a stateValue method to return the card's suit and value in a concatenated string.
var Card = function(suits, values) {
  this.suit = suits
  this.val = values
  this.stateValue = function(){
    return 'This is the ' + this.val + ' of ' + this.suit + '.'
  }
}
// 4. Using iteration, build a deck of cards.
var deck = []

for (var i = 0; i < values.length; i++) {
  for (var j = 0; j < suits.length; j++) {
    var card = new Card(suits[j], values[i])
    deck.push(card)
  }
}
// 5. Add an event listener to console.log the deck object and the deck length when a specific button is clicked (don't forget to create the button in your HTML!)
document.getElementById('showDeck').addEventListener('click', function() {
  console.log(deck)
  console.log(deck.length)
})

//////////////////////////////////
//           PART 2             //
//////////////////////////////////

// Make a list of animals in a shelter.

// 1. Make a constructor function for animals that takes name, species, breed, and available as arguments.
var Animals = function(name, species, breed, available) {
  this.name = name
  this.species = species
  this.breed = breed
  this.available = available
}
// 2. Make three animals and save them each to variables.
var pooba = new Animals('Pooba', 'Hedgehog', 'Spiny', true)
var simba = new Animals('Simba', 'Lion', 'King of the Jungle', true)
var tony = new Animals('Tony', 'tiger', 'tony the tiger', false)

// 3. Make an object to represent the shelter. Give it a name, location, and an empty list of animals.
var shelter1 = {
  name: 'Jungle Cage',
  location: 'Sahara',
  animals: []
}
// 4. Add the animals that you made in step 2 to the shelter that you made in step 3.
shelter1.animals.push(pooba, simba, tony)

// 5. Add an event listener to console.log the shelter object when a specific button is clicked (don't forget to create the button in your HTML!)
document.getElementById('showShelter1').addEventListener('click', function() {
  console.log('shelter from part 2:')
  console.log(shelter1)
})
//////////////////////////////////
//           PART 3             //
//////////////////////////////////

// Make a list of animals in a shelter again, but this time, use prototypes.

// 1. Make a constructor function for animals that takes no arguments. Its only property is an identify function which returns a string stating its name and species.

// 2. Make a Cat prototype which inherits from Animal. The constructor function should take three arguments: name, available, and breed.

// 3. Repeat step 2 for Dog.

// 4. Make three animals using the Cat and Dog prototypes and save them each to variables.

// 5. Make an object to represent the shelter. Give it a name, location, and an empty list of animals.

// 6. Add the animals that you made in step 4 to the shelter that you made in step 5.

// 7. Add an event listener to console.log the shelter object when a specific button is clicked (don't forget to create the button in your HTML!)
