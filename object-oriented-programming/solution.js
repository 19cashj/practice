/*

Although it may not seem as such at first, JavaScript is a very powerful Object-Oriented Language. By using objects, we can create clean and reusable code.

To review some definitions: object is an instance of a class that has methods and properties and class is a blueprint of an object.

There are four main principles of Object-Oriented programming: encapsulation, abstraction, inheritance, and polymorphism.

*/


/*

Encapsulation

Even if we have no idea what encapsulation is, we can guess just by the word that we are “enclosing” or hiding something, that’s exactly what is!
With encapsulation, object’s methods and properties are enclosed within the object, so they are not exposed.

*/

class Dog {
    constructor(breed, weight) {
        this.breed = breed;
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
}

const newDog = new Dog("German Shepard", 100);
console.log(newDog.getWeight);

//In this example the variables are not exposed directly but set or “enclosed” through functions instead.

/*

Abstraction

If we look at the dog, we can only see what is outside. What we don’t see is the complex inside.

That’s what abstraction is: hiding complex details and showing simple ones. It helps the code to be more understandable.

*/

function Cake(type, size) {
    this.type = type;
    this.size = size;
    const recipe = "Gather ingredients, put in oven, wait, done";
    const lookForRecipe = () => {
        return recipe;
    }
    this.getRecipe = () => {
        console.log(lookForRecipe);
    }
} // Abstraction is achieved by hiding the variable ‘recipe’ and function ‘lookForRecipe’ from the outside and it’s only accessible from getRecipe function.

/*

Inheritance

Inheritance allows for parent class to pass functionality to a child class, again, creating clean and reusable code, avoiding repeats.

*/

class Gorilla {
    constructor(name, favFood) {
        this.name = name;
        this.favFood = favFood;
    }
    eatFood() {
        console.log(`${this.name} ate ${this.favFood}`)
    }
}
class Chimpanzee extends Gorilla {
}
//We use keyword “extends” to create a subclass of class Gorilla and we can see how Chimpanzee class inherits constructor and the function — eatFood- in this case.

/*

Polymorphism

We think of polymorphism as something having multiple forms. In this instance, polymorphism means the same method can be used on different objects. 
For example , if a Car and a Motocycle have the same function — drive, polymorphism gives us an ability to call the same method on different objects.

*/

class Car {
    drive() {
        console.log("slow");
    }
}

class Motorcycle extends Car {
    drive() {
        console.log("fast");
    }
}

//With this example we visualize how the same function is called on different classes.