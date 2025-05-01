import CardDetail from "./CardDetail";
import { useState } from "react";

const Cards = ({ pokemons }) => {
  const [pokemon, setPokemon] = useState();

  const onCharacterClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  }
  return (
    <div className="cards">
      {pokemons.map((p, index) => (
        <div
          key={index}
          className="card"
          onClick={() => onCharacterClick(p.url)}
        >
          {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
        </div>
      ))}
      {pokemon && <CardDetail pokemon={pokemon}/>}
    </div>
  );
};
export default Cards;