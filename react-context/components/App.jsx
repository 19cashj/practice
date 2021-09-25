import React, { useState } from "react";
import Login from "./Login"
import Profile from "./Profile";
import { LoginContext } from '../contexts/LoginContext'
{/* Use context in the parent component of the components you want to share information with. In this case App.js*/}

export default function App() {
    const [username, setUsername] = useState("");
    const [showProfile, setShowProfile] = useState(false); {/* States to share for context in the parent component */}
    return (
        <div>
            <LoginContext.Provider value={{username, setUsername, setShowProfile}}> {/* Variables to be shared using the provider */}
                {showProfile ? <Profile /> : <Login />}
            </LoginContext.Provider>
        </div>
    );
    {/* Context is creating context providers, passing states from the parent to the child components to access those values */}
}