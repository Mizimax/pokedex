import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import differenceBy from 'lodash/differenceBy';

import { Box, Grid } from '../../Components/Base';
import PokemonCard from '../../Components/PokemonCard';
import usePokemonList from '../../Hooks/usePokemonList';
import Modal from 'react-modal';
import SearchBox from '../../Components/SearchBox/SearchBox';
import styled from 'styled-components';
import mapPokemonStatus from '../../Utils/mapPokemonStatus';
import { ACTIONS } from '../../Components/PokemonCard/PokemonCard';

const customModalStyle = {
  overlay: {
    position: 'absolute',
    backgroundColor: '#000000a3',
  },
};

const SearchBoxWrapper = styled(Box)`
  position: sticky;
  z-index: 99;
  top: 0;
`;

const PokemonModal = ({ myPokemon, onSelectPokemon, ...props }) => {
  const [search, setSearch] = useState();
  const pokemonList = usePokemonList({ search });
  const [availablePokemon, setAvailablePokemon] = useState();

  const selectablePokemon = useMemo(
    () => differenceBy(pokemonList, myPokemon, 'id'),
    [pokemonList, myPokemon],
  );

  const handleOnSearchChange = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    setAvailablePokemon(selectablePokemon);
  }, [selectablePokemon]);

  return (
    <Modal
      parentSelector={() => document.querySelector('#root')}
      style={customModalStyle}
      {...props}
    >
      <SearchBoxWrapper>
        <SearchBox
          value={search}
          onChange={(e) => handleOnSearchChange(e.target.value)}
          placeholder={'Find pokemon'}
        />
      </SearchBoxWrapper>
      {availablePokemon?.map((pokemon, index) => (
        <PokemonCard
          mt={4}
          title={pokemon.name}
          status={mapPokemonStatus(pokemon)}
          imageUrl={pokemon.imageUrl}
          action={ACTIONS.ADD}
          onActionClick={() => onSelectPokemon(pokemon)}
          key={pokemon.id}
        />
      ))}
    </Modal>
  );
};

export default PokemonModal;
