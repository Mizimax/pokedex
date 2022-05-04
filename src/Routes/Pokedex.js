import React from 'react';

import { Box, Grid, Text } from '../Components/Base';
import Card from '../Components/Card';

const myPokemon = [{ id: '1' }, { id: '2' }];

const Pokedex = (): JSX.Element => {
  return (
    <Box>
      <Text fontSize={5} fontFamily={'header'} fontWeight={700} textAlign={'center'}>
        My Pokedex
      </Text>
      <Grid
        p={4}
        gridTemplateColumns={'repeat(2, 1fr)'}
        gridGap={4}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {myPokemon?.map((pokemon) => (
          <Card key={pokemon.id}>555</Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Pokedex;
