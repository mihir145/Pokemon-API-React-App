import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Pokemon from "./Pokemon";
import loader from "./loader.svg";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currUrl, setcurrUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [prevUrl, setprevUrl] = useState("");
  const [nextUrl, setnextUrl] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(currUrl)
      .then((response) => {
        setPokemons(response.data.results);
        setnextUrl(response.data.next);
        setprevUrl(response.data.previous);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currUrl]);

  return (
    <div className="App">
      <h1 className="header-text">Pokemon API - React App</h1>
      <br />
      {loading ? (
        <div className="loader">
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        <Fragment>
          <div className="row">
            {pokemons.map((p, key) => {
              return <Pokemon name={p.name} key={key} />;
            })}
          </div>

          <div className="btn-container">
            <button
              onClick={() => {
                setcurrUrl(prevUrl);
              }}
              disabled={!prevUrl}
            >
              Prev
            </button>
            <button
              onClick={() => {
                setcurrUrl(nextUrl);
              }}
              disabled={!nextUrl}
            >
              Next
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
