// displays each Pokemon name as it's own card
import CardDetail from "./CardDetail";
import { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent
} from "@mui/material";

const Cards = ({ pokemons }) => {
  const [pokemon, setPokemon] = useState();

  const onCharacterClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 150px)', 
          gridTemplateRows: 'repeat(5, 1fr)',   
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        {pokemons.slice(0, 20).map((p, index) => (
          <Card
            key={index}
          >
            <CardActionArea
              onClick={() => onCharacterClick(p.url)}
              sx={{ height: '100%', width: '100%' }}
            >
              <CardContent
                sx={{
                  padding: '10px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ fontWeight: 'bold', fontSize: '1rem' }}
                >
                  {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>

      {pokemon && (
        <Grid>
          <CardDetail pokemon={pokemon} />
        </Grid>
      )}
    </Grid>
  );
};

export default Cards;
