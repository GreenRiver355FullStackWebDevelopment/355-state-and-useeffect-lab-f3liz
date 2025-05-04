import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import { Typography, Button, Grid } from '@mui/material';

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
    setPage((prev) => (prev < 51 ? prev + 1 : 0));
  };

  const onClickBack = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 51));
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={4}
      sx={{ padding: 4, backgroundColor: '#cc0000' }} 
    >
      <Grid item>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold'}}>
          Pokémon List: 
        </Typography>
      </Grid>

      <Grid item>
        <Cards pokemons={pokemons} />
      </Grid>

      <Grid item>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={onClickBack}
              disabled={page === 0}
              sx={{ backgroundColor: '#cfcdcd', color: '#000000' }}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={onClickNext}
              sx={{ backgroundColor: '#cfcdcd', color: '#000000' }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
