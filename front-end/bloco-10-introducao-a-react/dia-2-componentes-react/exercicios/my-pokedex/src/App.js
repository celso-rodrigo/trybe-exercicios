import React from "react";
import LoadData from "./LoadData";
import data from "./data"

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
        {data.map((pokemon, index) => 
          <LoadData data={pokemon} key={index} />
        )}
    </main>
  );
}

export default App;
