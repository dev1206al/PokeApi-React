import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/';

const getCharacterByName = async (nombre) => axios.get(`${BASE_URL}pokemon/${nombre}`);

  export { getCharacterByName };