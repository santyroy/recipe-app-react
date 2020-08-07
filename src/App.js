import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "c9f7abdf";
  const APP_KEY = "8368d8d2cd3caca655e9969fb5c46522";

  // counter is the state, setCounter is the setState method, 0 is the initial value of counter.
  const [counter, setCounter] = useState(0);
  // recipes is the state, setRecipes is the setState method, [] empty array of recipes.
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // If you're familiar with React class lifecycle methods,
  // you can think of useEffect Hook as componentDidMount,
  // componentDidUpdate, and componentWillUnmount combined.
  //
  // useEffect() runs for the first time when the page loads
  // and also runs when ever there is a change in the DOM
  // if use empty array [] as a second parameter to the useEffect method
  // then it just runs once when the component loads.
  //
  // if we pass a variable(query) to the empty array then whenever
  // the variable is updated at that time the useEffect is called.

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Enter your favourite dish"
          value={search}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.uri} item={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
