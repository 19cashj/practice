import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  function nameChange(e) {
    const inputName = e.target.name;
    const newValue = e.target.value;
    //Alternatively, const {name, value} = e.target;
    //We never want to use event values inside the state changing function, just store them in variables outside
    setfullName((prevValue) => { 
      if (inputName === "fName") {
        return {fName: newValue, lName: prevValue.lName};
      }
      else if (inputName === "lName") {
      return {fName: prevValue.fName, lName: newValue};
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={nameChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={nameChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
