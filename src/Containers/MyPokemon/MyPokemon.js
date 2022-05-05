import React from 'react';

import { Grid } from '../../Components/Base';
import PokemonCard from '../../Components/PokemonCard';

const MyPokemon = () => {
  // get pokemon card from api
  const myPokemon = [
    { id: 1, status: { happiness: 4, hp: 70, strength: 60, weakness: 50 } },
    { id: 2, status: { happiness: 4, hp: 70, strength: 60, weakness: 50 } },
  ];
  return (
    <Grid
      p={4}
      gridTemplateColumns={'repeat(2, 1fr)'}
      gridGap={4}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {myPokemon?.map((pokemon) => (
        <PokemonCard
          title={'test'}
          status={pokemon.status}
          imageUrl={'https://images.pokemontcg.io/ex8/98.png'}
          key={pokemon.id}
        />
      ))}
    </Grid>
  );
};

export default MyPokemon;
