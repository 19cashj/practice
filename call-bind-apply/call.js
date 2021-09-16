const cat = {
    name: 'Mike',
    speak(sound) {
        return `${this.name} says ${sound}`
    }
}

console.log(cat.speak("Hello"));
const catSpeak = cat.speak;
console.log(catSpeak.call(cat, "Hi")); //The call method is like bind, but will immediately assign the this context

/*

Use .bind() when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

*/