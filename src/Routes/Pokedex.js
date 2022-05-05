import React from 'react';

import { Box, Flex, Grid, Text } from '../Components/Base';
import ActionBar from '../Components/ActionBar';
import MyPokemon from '../Containers/MyPokemon';

const Pokedex = () => {
  const handleOnAction = () => {};

  return (
    <Flex flexDirection={'column'} height={'100%'}>
      <Box height={'100%'} style={{ overflow: 'auto' }} flex={'1'}>
        <Text my={5} fontSize={5} fontFamily={'header'} fontWeight={700} textAlign={'center'}>
          My Pokedex
        </Text>
        <MyPokemon />
      </Box>
      <ActionBar onAction={handleOnAction} />
    </Flex>
  );
};

export default Pokedex;
