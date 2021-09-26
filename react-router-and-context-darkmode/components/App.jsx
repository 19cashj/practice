import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Error from "./Error"
import DarkmodeBtn from "./DarkmodeBtn";
import { DarkmodeContext } from "../contexts/DarkmodeContext";

export default function App() {
    const [darkMode, setdarkMode] = useState(false);
    return (
        <div style={{backgroundColor: darkMode ? 'black' : 'white'}}>
            <DarkmodeContext.Provider value={{darkMode, setdarkMode}}>
            <DarkmodeBtn />
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home}>
                            <Home />
                        </Route>
                        <Route path="/about" component={About}>
                            <About />
                        </Route>
                        <Route component={Error} />
                    </Switch>
                </Router>  
            </DarkmodeContext.Provider>
        </div>
    );
}