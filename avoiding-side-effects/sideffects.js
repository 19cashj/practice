/*

As developers, we tend to spend more time debugging our code than writing new features.

Most times, this is due to the negligence of the side effects in our codebase.

In this article, we will understand what side effects are and how side effects can be avoided.

In programming, a function is a unit of code that receives zero or more arguments and may return a value or undefined.

We can say that the scope of a function is it’s own universe Where commands are stacked for execution.


What are side effects in JavaScript

Side effects are mutations or actions that happen in our code environment that we cannot make an account of. It could result in pollution of the global scope.

*/

let age = 2;
function changeAge () {
  age = 6;
  return age;
}
changeAge();

/*

Considering the code snippet above, we can see that the function changeAge, when called, will mutate the value of the variable age.

In this illustration, the function is written for the mutation of value in the variable age.

But in a real codebase, these mutations can be done without our prior knowledge thereby creating bugs in our code and also pollutes our global scope.
A good software developer is more focused on writing efficient programs by avoiding side effects in his codebase.

It is good practice to avoid side effects in our codebase.

*/

/*

How can side effects be avoided

Have you heard of functional purity before? Okay, functional purity is a programming concept focused on avoiding side effects and returning a value eliminating undefined as the output of a function. 

With functional purity, we create a deterministic function.

By deterministic, we say no matter what Goes into a function as a value, the returned value will always be the same even when the function is executed a thousand times.

Thus, the creation of deterministic functions is a key principle for avoiding unnecessary bugs.
We can’t talk about functional purity without prior knowledge of pure functions.


What are Pure functions

Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects).

Its output or return value must depend on the input/arguments and pure functions should not return undefined rather it must return a value.

*/

let age = 2;
function notPure (arg) {
  age = 6 * arg;
  return age;
}
changeAge();

// The above function is not a pure function because it modified the variable age outside its scope.

function notPure (arg) {
    let age = 2;
    let newAge = age * arg; 
}

// The function in the code snippet above isn’t a pure function also because it doesn’t return a value even though it didn’t modify any variable outside its scope.

function notPure (arg) {
    let age;
    let newAge = age * arg; 
    return newAge;
}

// The function in the code snippet above isn’t a pure function also, even though it didn’t modify any variable outside its scope. 
// It returns undefined since no value is assigned to the age variable which makes it impure.

function notPure(arg) {
    let age = 2;
    let newAge = age * 5; 
    return newAge;
}

/*

The function in the code snippet above also isn’t a pure function, though it didn’t modify any variable outside its scope, its output  return newAge; , isn’t dependent on the input arg.

Not only must a pure function return a value but it returned value must depend on the input.

*/

function isPure(arg) {
    let age = 2;
    let newAge = age * arg; 
    return newAge;
}

/* !!!!!!!!!!!!!!!

Finally, here is a pure function. It has no side effect as it doesn’t mutate any variable or state outside its scope and it returns an output based on the input parameter.

!!!!!!!!!!!!!!!! */