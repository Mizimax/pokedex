import React from 'react';

import { Box, Flex, Grid, Text } from '../Components/Base';
import ActionBar from '../Components/ActionBar';
import Card from '../Components/Card';

const myPokemon = [{ id: '1' }, { id: '2' }];

const Pokedex = () => {
  const handleOnAction = () => {};

  return (
    <Flex flexDirection={'column'} height={'100%'}>
      <Box height={'100%'} style={{ overflow: 'auto' }} flex={'1'}>
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
      <ActionBar onAction={handleOnAction} />
    </Flex>
  );
};

export default Pokedex;
