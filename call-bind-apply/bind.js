const cat = {
    name: 'Mike',
    speak(sound) {
        return `${this.name} says ${sound}`
    }
}

console.log(cat.speak('Hello')); // this works normally, no need to bind.

const catSpeakBroke = cat.speak; // however in other cases, such as assigning the function to a variable, changes what "this" means so we need to bind it back correctly
console.log(catSpeakBroke("Hi")); // the name will be undefined

const catSpeak = cat.speak.bind(cat) //This works as we now are setting the context of "this" to the cat object
console.log(catSpeak("Bonjour")); // works as intended

const catSpeakBen = cat.speak.bind({name : 'Ben'}, "yo"); //In this case, you can also assign the context by changing a key value pair, as well as other arguments
console.log(catSpeakBen());

//Once you bind a context, you cannot rebind to the same function

/*

Use .bind() when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

*/