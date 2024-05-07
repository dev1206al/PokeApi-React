import { useEffect, useState } from 'react';
import { getCharacter } from '../services/characterServices';
import { getCharacterByName } from '../services/nameServices';
import CharacterCard from '../components/CharacterCard';
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [character, setCharacter] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const getInitialData = async () => {
    try {
      const pokemonList = await getCharacter();
      console.log('pokemonList:', pokemonList);
      const promises = pokemonList.map(async pokemon => {
        const pokemonDataResponse = await fetch(pokemon.url);
        return pokemonDataResponse.json();
      });

      const detailedPokemonData = await Promise.all(promises);
      setCharacter(detailedPokemonData);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      alert('Error al cargar los Pokémon');
    }
  };
  
  const getInitialDataSearch = async () => {
    try {
      const{data} = await getCharacterByName(busqueda);
      const {results} = data;
      setCharacter(results);
      console.log(results);
    } catch (error) {
      alert('Error al cargar los Pokémon');
    }
  }
  useEffect(() => {
    getInitialData();

  }, []); // Ejecutar getInitialData cuando cambie la búsqueda


  
  return (
    <div className='bg-body-tertiary'>
      <SearchBar text={busqueda} setText={setBusqueda} search={getInitialDataSearch}  />
      <CharacterList>
        {character.map((char, index) => (
          <CharacterCard key={index} character={char} />
        ))}
      </CharacterList>
    </div>
  );
};

export default Home;
