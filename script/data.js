let PokeDexAPI = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

async function fetchPokeDex() {
    const response = await fetch(PokeDexAPI);
    const data = await response.json();
    return data.results;
}