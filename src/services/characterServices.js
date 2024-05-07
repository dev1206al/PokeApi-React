import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/';

const getCharacter = async () => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon?limit=100`);
    return response.data.results; // Devuelve solo los resultados de la respuesta
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error; // Propaga el error para manejarlo en otro lugar si es necesario
  }
}

  
export { getCharacter };
