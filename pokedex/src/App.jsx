import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const fetchPokemons = async () => {
    const limit = 20;
    const offset = page * limit;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    console.log(data.results);
    setPokemons(data.results);
  };

  const onClickNext = () => {
    setPage((prev) => (prev < 51 ? prev + 1 : 0))
  };

  const onClickBack = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 51))
  };

  return (
    <div className="App">
    <h1>Pokemon</h1>
    <div className="main-container ">
      <div>
        <Cards
          pokemons={pokemons}
          onCharacterClick={fetchPokemons}
        />
        <div>
          <button onClick={onClickBack} disabled={page === 0}>
            Back
          </button>
          <button onClick={onClickNext}>Next</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
