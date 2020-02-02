//zadanie 0a
var city = {
    capital: String,
    population: Number,
    president: String,
    primeMinisters: String = []
};
console.log(city)

//zadanie 0b
var timeMachine = {
    shape: 'rectangle',
    model: 'new',
    run: function (date, place) {
        console.log(date + " " + place)
    }
}
for (let atributes in timeMachine) {
    console.log(timeMachine[atributes])
}
timeMachine.run("1986-04-26", "Chernobyl")

//zadanie 1
const book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    numberOfPages: 1345
}
for (let atributes in book) {
    console.log(book[atributes])
}

//zadanie 2
const person = {
    name: "Aureliusz",
    age: 22,
    sayHello: function () {
        console.log('Hello')
    }
}
for (let atributes in person) {
    console.log(person[atributes])
}
person.sayHello()

//zadanie 3 
const recipe = {
    title: "Jajecznica z boczkiem i pomidorem",
    servings: 2
}
recipe.ingredients = ['6 jajek', '200g boczku', '1 pomidor']
for (let atributes in recipe) {
    console.log(recipe[atributes])
}

//zadanie 6 
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist = false;
//łyżka nie isnieje - wlasciwosc fork przechodzi na spoon