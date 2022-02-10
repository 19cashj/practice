import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const Home = React.lazy(() => import("./Home"))
const About = React.lazy(() => import("./About"))
const Error = React.lazy(() => import("./Error"))

// For code splitting, use React.lazy to dynamically import required components instead of all at once. This speeds up a large react application considerably

export default function App() {
    return (
        <Router>
            <React.Suspense fallback={<p>Loading...</p>}>
                <Switch>
                        <Route exact path="/" component={Home}>
                            <Home />
                        </Route>
                        <Route path="/about" component={About}>
                            <About />
                        </Route>
                        <Route component={Error} />
                </Switch>
            </React.Suspense>
        </Router>
    );
}

// Wrap the lazily loaded components in a React.Suspense component and give it a fallback component to render while it dynamically loads required components