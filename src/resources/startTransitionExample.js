

//GOOD FOR REFRESHING DATA ON A PAGE ALREADY LOADED, LIKE TAB NAVIGATIONS ON A 
//LOADED PAGE.


//startTransition, updates state without blocking the components:
import { startTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    //wrapper around useState
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}

//Good for navigation bar animations:
//Transitions let you keep the user interface updates responsive even on slow devices.
//With a transition, your UI stays responsive in the middle of a re-render. 
//For example, if the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.

//useTransition has pending state:
import "./styles.css";
import { useState, useTransition } from "react";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [textInput, setTextInput] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleChange = (e) => {
    setTextInput(e.target.value);
    const list = [];
    startTransition(() => {
      for (let i = 0; i < 10000; i++) {
        list.push(e.target.value);
      }
      setListItems(list);
    });
  };
  return (
    <div className="App">
      <input type="text" value={textInput} onChange={handleChange} />
      {listItems.map((item, ind) => {
        return <p key={ind}>{item}</p>;
      })}
    </div>
  );
}

//okay example:
//https://github.com/jahidshuvoml/demo-react-18-startTransition/blob/main/src/components/transitionTest.jsx

import React, { useState } from "react";
import { useTransition } from "react/cjs/react.development";

const TransitionTest = () => {
  const numberOfButton = 3000;
  const [input, setInput] = useState("");
  const [query, setQuery] = useState([...Array(numberOfButton)].fill("demo"));
  const [pending, startTransition] = useTransition(true);
  const handleChange = (e) => {
    setInput(e.target.value);
    // setQuery([...Array(numberOfButton)].fill(input));
    startTransition(() => {
      setQuery([...Array(numberOfButton)].fill(input));
    });
  };
  console.log(query);
  return (
    <div className="m-transition-test">
      <div className="m-transition-test__centered">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="type here"
        />
      </div>
      {/* {query.map((val, index) => (
        <button key={index}>{val}</button>
      ))} */}
      {pending ? (
        <h1>Loading</h1>
      ) : (
        query.map((val, index) => <button key={index}>{val}</button>)
      )}
    </div>
  );
};

export default TransitionTest;