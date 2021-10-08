import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  { title: "What is React?", content: "React is front-end JS framework" },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "Red Color",
    value: "red",
  },
  {
    label: "Blue Color",
    value: "blue",
  },
  {
    label: "Green Color",
    value: "green",
  },
  {
    label: "Purple Color",
    value: "purple",
  },
  {
    label: "Orange Color",
    value: "orange",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
