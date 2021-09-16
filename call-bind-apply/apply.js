const cat = {
    name: 'Mike',
    speak(sound) {
        return `${this.name} says ${sound}`
    }
}

console.log(cat.speak("Hello"));
const catSpeak = cat.speak;
console.log(catSpeak.apply(cat, ['Bonjourino'])); //Apply is almost exactly like bind, but instead takes arguments in an array format.

const unknownArgs = (...args) => { // This method is useful when you don't know how many arguments are being passed in...
    return catSpeak.apply(cat, args);
}

console.log(unknownArgs('wersgfdijpxvck'));

/*

Use .bind() when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

*/