// Factory functions are alternatives to constructors, used without the "new" keyword
const personFactory = (name, age) => {
    const gender = 'male';
    const privateVariable = 123;
    const privateFunction = () => console.log("You won't see me");
    const sayHello = () => console.log('hello!');
    return { name, age, gender, sayHello }; //only variables/functions that are returned can be used outside scope
  };
  
const jeff = personFactory('jeff', 27);
console.log(jeff.name); // 'jeff'
console.log(jeff.gender);
jeff.sayHello();
//jeff.privateFunction() or jeff.privateVariable; // will not work

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName}
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);

//Another example. Factories are very useful for creating objects with private variables and functions. The developer can directly control what is public or not simply by returning what should be public.


const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
  }
  
  const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const {sayName} = Person(name)
    const doSomethingNerdy = () => console.log('nerd stuff')
    return {sayName, doSomethingNerdy}
  }
  
  const mike = Nerd('mike')
  
  mike.sayName() //my name is mike
  mike.doSomethingNerdy() // nerd stuff

  //Inheritance with factories

  const Geek = (name) => {
    const prototype = Person(name)
    const doSomethingGeeky = () => console.log('geek stuff')
    return Object.assign({}, prototype, {doSomethingGeeky})
  }
  
  //Inherit all