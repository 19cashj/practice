import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Error from "./Error"

export default function App() {
    return (
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
    );
}