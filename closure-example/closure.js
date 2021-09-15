//global scope
let globalVar = 1;

const parent = () => { //local scope
    let privateVar = 5; //cannot be accessed outside of the function normally, they are private
    console.log(`${globalVar}, I am the original variable of the global scope`); //global variables can be accessed anywhere
    console.log(`${privateVar}, I am the original variable of the local scope of the parent function`); //as well as local variables in the function

    const child = () => {
        console.log(`${globalVar += 5}, the global variable just got changed through the child function`); //still in scope to access parent's local variables
        console.log(`${privateVar += 10}, the private variable just got changed through the child function, and can continue to be changed no problem`); //as well as global variables still
    }

    return child; //returning the child function allows modification of the parent's local variables
}

try {
    console.log(privateVar); //this will not work
}
catch {
    console.log("I can't access those private variables");
}

const childChange = parent(); //we can assign the parent function to a variable
childChange(); //and calling that variable allows us to perform operations through the child function on parent's local variables
childChange(); //when doing this, the parent's local variables do not "reset" back to what they were originally assigned and can continue to be modified

//this is an important concept of functional programming, stops polluting the global namespace