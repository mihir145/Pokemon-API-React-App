import React from "react";

const Pokemon = ({ name }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor:
          "rgb(" +
          Math.random() * 256 +
          "," +
          Math.random() * 256 +
          "," +
          Math.random() * 256 +
          ")",
      }}
    >
      <h1>{name}</h1>
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
      />
    </div>
  );
};

export default Pokemon;
