import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const pokemonListURL = 'http://localhost:3030/api/cards';

const usePokemonList = ({ search }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const getPokemonList = useCallback(async () => {
    console.log('search : ', search);
    try {
      const queryURL = new URL(pokemonListURL);
      if (search) queryURL.searchParams.append('name', search);
      const response = await axios.get(queryURL);
      setPokemonList(response.data.cards);
    } catch (error) {
      console.error('Can not get pokemon list: ', error);
    }
  }, [search]);

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);

  return pokemonList;
};

export default usePokemonList;
