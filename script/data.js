let PokeDexAPI = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

let AllPokemons = []


async function fetchPokeDex() {
    const response = await fetch(PokeDexAPI);
    const data = await response.json();
    renderPokemons(data.results)
}

async function renderPokemons(PokemonsNames) {
    for (let ipokemon = 0; ipokemon < PokemonsNames.length; ipokemon++) {
      const pokemon = PokemonsNames[ipokemon];
        const pokemonName = pokemon.name;
        let typeAndImg = await getTypeAndImg(pokemon.url);
        AllPokemons.push({ "name": `${pokemonName}`, "type": typeAndImg.type, "img": typeAndImg.img, "id" : typeAndImg.id });
    }
    console.log(AllPokemons); 
    showPokedex() 
}

 async function getTypeAndImg(url) {
    const response = await fetch(url);
    const data = await response.json();

    pokemonImg = data.sprites.front_default;
    pokemonType = data.types[0].type.name
    pokemonID = data.id
    return { "img": `${pokemonImg}`, "type": `${pokemonType}`, "id" : `${pokemonID}` };
}
