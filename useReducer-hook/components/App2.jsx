{/* Advanced useReducer */}

import React, { useReducer, useState } from "react"

function reducer(state, action) {
    switch(action.type) {
        case 'add-todo':
            return { todos: [...state.todos, {text: action.text}]};
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

function App() {
    const [{todos}, dispatch] = useReducer(reducer, { todos: [] });
    const [text, setText] = useState();
    return (
        <>
            <form onSubmit={e => {e.preventDefault(); dispatch({type: 'add-todo', text}); setText("")}}>
                <input value={text} onChange={e => setText(e.target.value)}></input>
            </form>
            <pre>{JSON.stringify(todos, null, 2)}</pre>
        </>
    )
}

export default App