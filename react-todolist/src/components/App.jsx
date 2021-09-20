import React, { useState } from "react";

function App() {
  const [input, setInput] = useState()
  const [toDos, settoDos] = useState([])

  function inputHandle(e) {
    const formText = e.target.value;
    setInput(formText);
  }

  function changeList() {
    settoDos(prev => {
      return (
        [...prev, input]
      )
    })
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={inputHandle} value={input}/>
        <button onClick={changeList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDos.map(e => <li>{e}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
