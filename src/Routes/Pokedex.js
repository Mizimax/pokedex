import React, { useState } from 'react';

import PokemonModal from '../Containers/PokemonModal';

import { Box, Flex, Grid, Text } from '../Components/Base';
import ActionBar from '../Components/ActionBar';
import PokemonCard from '../Components/PokemonCard';
import useModal from '../Hooks/useModal';
import { ACTIONS } from '../Components/PokemonCard/PokemonCard';
import mapPokemonStatus from '../Utils/mapPokemonStatus';

const Pokedex = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOnAction = () => {
    openModal();
  };

  const handleOnSelectPokemon = (selectedPokemon) => {
    setMyPokemon((prev) => [...prev, selectedPokemon]);
  };

  const handleOnRemovePokemon = (index) => {
    const newPokemon = [...myPokemon];
    newPokemon.splice(index, 1);
    setMyPokemon(newPokemon);
  };

  return (
    <Flex flexDirection={'column'} height={'100%'}>
      <Box height={'100%'} style={{ overflow: 'auto' }} flex={'1'}>
        <Text my={5} fontSize={5} fontFamily={'header'} fontWeight={700} textAlign={'center'}>
          My Pokedex
        </Text>
        <Grid
          p={4}
          gridTemplateColumns={'repeat(2, 1fr)'}
          gridGap={4}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {myPokemon?.map((pokemon, index) => (
            <PokemonCard
              title={pokemon.name}
              status={mapPokemonStatus(pokemon)}
              imageUrl={pokemon.imageUrl}
              action={ACTIONS.REMOVE}
              onActionClick={() => handleOnRemovePokemon(index)}
              key={pokemon.id}
            />
          ))}
        </Grid>
      </Box>
      <PokemonModal
        isOpen={isModalOpen}
        myPokemon={myPokemon}
        onRequestClose={closeModal}
        onSelectPokemon={handleOnSelectPokemon}
      />
      <ActionBar onAction={handleOnAction} />
    </Flex>
  );
};

export default Pokedex;
