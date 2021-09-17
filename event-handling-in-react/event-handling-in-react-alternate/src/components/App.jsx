import React, { useState } from "react";

function App() {
  function handleClick() {
    setHeadingText("Submitted");
  }
  function buttonHover() {
    setButtonColor({backgroundColor: "cyan"})
  }
  function buttonLeave() {
    setButtonColor({backgroundColor: "white"})
  }
  const [headingText, setHeadingText] = useState("Login");
  const [buttonColor, setButtonColor] = useState({backgroundColor: "white"});
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {buttonColor} onClick={handleClick} onMouseOver={buttonHover} onMouseOut={buttonLeave}> Submit</button>
    </div>
  );
}

export default App;
