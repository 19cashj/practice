import React from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

{/* Two ways to use query strings, first is to use the query-string npm package which is supported by all browsers, or use vanilla URLSearchParams API*/}
{/* Query strings are powerful tools for use in fetching specific items to display such as different blogs, it makes a website more dynamic */}

export default function App() {
    const { search } = useLocation(); {/* react-router-dom has a uselocation hook to get the query string */}
    console.log(search);

    const { name, age } = queryString.parse(search); {/* Query string package uses queryString.parse and the useLocation variable to parse the query string */}
    
    const searchParams = new URLSearchParams(search); {/* URLSearchParams API takes the useLocation variable */}
    const height = searchParams.get('height'); {/* URLSearchParams then uses the .get method to retrieve the individual query strings */}

    return (
        <div>
            <a href='http://localhost:1234?name=tyler&age=32&height=6ft'>Click here to test</a>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Height: {height} </h1>
        </div>
    );
}