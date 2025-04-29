let pokeAmount = 20;
let loadNumber = 0;
let allPokemons = [];
let findPokemon = [];
let evolutionChain = [];

async function fetchPokeDex() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeAmount}&offset=${loadNumber}`);
    const data = await response.json();

    await pushPokemons(data.results);
    await Amount()
}

async function pushPokemons(pokemonList) {
    const pokemonDataPromises = pokemonList.map(async (pokemon) => {
        const name = pokemon.name;

        const [info, entry, abilities] = await Promise.all([
            getPokeInfo(pokemon.url),
            getPokeEntry(name),
            getAbilitis(name)
        ]);

        return {
            name: name,
            img: info.img,
            id: info.id,
            height: info.height,
            weight: info.weight,
            entryText: entry,
            abilitis: abilities
        };
    });

    const results = await Promise.all(pokemonDataPromises);
    allPokemons.push(...results);

    showPokedex(allPokemons);
}

async function getPokeInfo(url) {
    const response = await fetch(url);
    const data = await response.json();

    return {
        img: data.sprites.front_default,
        id: data.id,
        height: data.height,
        weight: data.weight,
        speciesUrl: data.species.url
    };
}

async function getPokeEntry(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`);
    const data = await response.json();

    const entry = data.flavor_text_entries.find(entry => entry.language.name === "en");
    const formattedText = entry ? entry.flavor_text.replace(/\n|\f/g, " ") : "No entry available.";
    return formattedText;
}

async function getAbilitis(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    const data = await response.json();

    const abilities = data.abilities.map(ab => ab.ability.name);
    const stats = {};
    data.stats.forEach(statObj => {
        stats[statObj.stat.name] = statObj.base_stat;
    });
    const types = data.types.map(t => t.type.name);

    return {
        abilities: abilities,
        stats: stats,
        types: types
    };
}

async function Amount() {
    if (allPokemons.length >= 160) {
        return;
    }

    loadNumber += 20;
    fetchPokeDex();
}