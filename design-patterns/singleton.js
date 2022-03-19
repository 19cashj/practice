/*

The Singleton pattern allows you to limit the number of instances of a particular object to one. This single instance is called the singleton. 
Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.

*/

// We want a singleton that creates a variable pManager, if another call is made to create a pManager the singleton will instead return the already created pManager

const Singleton = (function(){
    let pManager; // variable to be limited
  
    function ProcessManager() { 
        this.numProcess = 1234; //not important, only for example
    }
  
    return {
      getProcessManager: () =>
      {
        if(!pManager) //if a pManager does not exist, create one, else return the reference of the existing one
          pManager = new ProcessManager()
        return pManager
      }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2); // This test confirms, the first processManager created the first pManager, and processManager2 returned the already created pManager