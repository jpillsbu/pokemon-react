import React from "react";
import { useQuery } from "react-apollo";
import { Pokemon } from "./Pokemon";
import { GET_POKEMONS } from "./get-pokemons";

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonsContainer;
