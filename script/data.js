let PokeDexAPI = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

let AllPokemons = []


async function fetchPokeDex() {
    const response = await fetch(PokeDexAPI);
    const data = await response.json();
    pushPokemons(data.results)
}

async function pushPokemons(PokemonsNames) {
    for (let ipokemon = 0; ipokemon < PokemonsNames.length; ipokemon++) {
        const pokemon = PokemonsNames[ipokemon];
        const pokemonName = pokemon.name;
        let typeAndImg = await getPokeInfo(pokemon.url);
        let pokemonEntry = await getPokeEntry(pokemonName);
        let pokemonAbilitis = await getAbilitis(pokemonName);
        AllPokemons.push({ "name": `${pokemonName}`, "img": typeAndImg.img, "id": typeAndImg.id, "height": typeAndImg.height, "weight": typeAndImg.weight, "entryText": pokemonEntry, "abilitis": pokemonAbilitis,});
    }
    console.log(AllPokemons);
    showPokedex()
}

async function getPokeInfo(url) {
    const response = await fetch(url);
    const data = await response.json();

    pokemonImg = data.sprites.front_default;
    pokemonHight = data.height
    okemonWeight = data.weight
    pokemonID = data.id
    speciesUrl = data.species.url

    return { "img": `${pokemonImg}`, "id": `${pokemonID}`, "height": `${pokemonHight}`, "weight": `${okemonWeight}`, "speciesUrl": `${speciesUrl}` };
}

async function getPokeEntry(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`);
    const data = await response.json();

    pokemonEntry = data.flavor_text_entries[0].flavor_text
    const formattedText = pokemonEntry.replace("\n", "<br>").replace("\f", "");
    return formattedText
}

async function getAbilitis(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    const data = await response.json();

    const abilities = data.abilities.map((ab) => ab.ability.name);
    const stats = {};
    data.stats.forEach((statObj) => {
        stats[statObj.stat.name] = statObj.base_stat;});
    const types = data.types.map((t) => t.type.name);
    return {
        abilities: abilities,
        stats: stats,
        types: types};
}
