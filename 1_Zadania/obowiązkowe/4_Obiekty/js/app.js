//zadanie 0
const city = {
    capital: "Warszawa",
    population: 2000000,
    president: "Trzaskowski",
    primeMinister: ["Adam","Bogdan"]
};

console.log(city.capital + city.population + city.president + city.primeMinister);

const timeMachine = {
    shape: "Portal",
    model: "",
    run: function(date,place) { 
        console.log('Przeniosłeś się do ${place} i jest obecnie ${date}+ date');
    }
};
time Machine.run("20-11-2030","Sydney");
    
const book = {
    title: 'test',
    author: 'authot',
    numperofPages: 'number'
};

for (const key of book) {
    console.log(book[key]);
}

//zadanie 2

var person = {
    name: ' Andrzej',
    age 12;
    sayHello: function(){
        console.log("hello");
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
const recipe = {
    title = 'perzepis',
    servings = 0,
}

recipe.ingredients = [];
recipe.addIngredient = function(ingredient) {
    this.ingredient.push(ingredient);
    this.servings++;
}

recipe.addIngredient('składnik 1');
recipe.addIngredient('składnik 2');

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//zad6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);
