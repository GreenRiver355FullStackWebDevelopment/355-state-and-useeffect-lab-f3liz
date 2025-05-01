const CardDetail = ({ pokemon }) => {
    return (
      <div className="card-detail">
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Type: {pokemon.types.map((type, index) => type.type.name + (index < pokemon.types.length - 1 ? ", " : ""))}</p>
      </div>
    );
  };
  export default CardDetail;
  