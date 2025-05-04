// Displays the details of the pokemon on bottom card
import { Card, CardContent, Typography, Grid } from "@mui/material";

const CardDetail = ({ pokemon }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Card
          sx={{
            marginTop: 2,
            padding: 2,
            borderRadius: 2,
            maxWidth: 400,
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ color: '#FFD700', fontWeight: 'bold'}}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{ width: 120, height: 120 }}
            />

            <Typography variant="body1">Height: {pokemon.height}</Typography>

            <Typography variant="body1">Weight: {pokemon.weight}</Typography>
            
            <Typography variant="body1">
              Type: {" "}
              {pokemon.types.map((type, index) => (
                <span key={index}>
                  {type.type.name}
                  {index < pokemon.types.length - 1 ? ", " : ""}
                </span>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardDetail;