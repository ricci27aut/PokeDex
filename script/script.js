async function init() {
    showloadingScreen()
    await fetchPokeDex()
}

function showloadingScreen() {
    let ContentRef = document.getElementById('content')
    ContentRef.innerHTML = ""

    ContentRef.innerHTML = `<div class="loadingklass"><img src="./img/gif/4OKl.gif" alt="Loading gif"></iframe></div>`
}

function showPokedex(array) {
    let ContentRef = document.getElementById('content')
    ContentRef.innerHTML = ""
    place = "Entry"

    for (let i = 0; i < PokeAmount; i++) {
        ContentRef.innerHTML += PokédexEntry(i, array)
        splitTyps(i, array, place)
    }
    document.getElementById("Button-more").disabled = false;
}

function splitTyps(i, array, place) {
    let contentRef = document.getElementById('type' + place + i);
    contentRef.innerHTML = "";

    let types = array[i].abilitis.types;

    for (let j = 0; j < types.length; j++) {
        const type = types[j];
        contentRef.innerHTML += `<p class="${type} p-pokedex">${type}</p>`;
    }
}

function showPokemonInfo(id) {
    let ContentRef = document.getElementById('overlay')
    addOverlay(ContentRef)
    id = id - 1;

    ContentRef.innerHTML += PokédexInfo(id)
    splitTyps(id, AllPokemons, "Info")
    splitAbilitis(id)
    eventListener()
}

function renderMorePokemon() {
    document.getElementById("Button-more").disabled = true;

    if (PokeAmount === AllPokemons.length) {
        document.getElementById("Button-more").disabled = true;
        document.getElementById("Button-more").classList.add("unusable-button");
        return
    }
    AllPokemons = []
    showloadingScreen()
    PokeAmount = PokeAmount + 20;
    fetchPokeDex()
}

function searchForPokemon() {
    searchTerm = document.getElementById('search').value.toLowerCase();
    findPokemon = [];

    if (searchTerm.length >= 3) {
        findPokemon = loadMorePokemon(searchTerm);
        showPokedex(findPokemon)
    } if (searchTerm.length == 0) {
        showPokedex(AllPokemons)
    }
}

function loadMorePokemon(searchTerm) {
    const filtered = AllPokemons.filter(pokemon => pokemon.name.includes(searchTerm));
    return filtered;
}

function splitAbilitis(i) {
    let contentRef = document.getElementById("pokemonAbilities");
    contentRef.innerHTML = "";

    let abilitis = AllPokemons[i].abilitis.abilities;

    for (let j = 0; j < abilitis.length; j++) {
        const abiliti = abilitis[j];
        contentRef.innerHTML += `<p class="ability-${j}">${abiliti}</p>`;
    }
}

function nextPokeInfo(id) {
    if (id == AllPokemons.length) {
        document.getElementById("nexst-Button").disabled = true;
        document.getElementById("nexst-Button").classList.add("unusable-button");
        return
    }
    id = id + 1;
    showPokemonInfo(id)
}

function lastPokeInfo(id) {
    if (id === 1) {
        document.getElementById("last-Button").disabled = true;
        document.getElementById("last-Button").classList.add("unusable-button");
        return
    }
    id = id - 1;
    showPokemonInfo(id)
}

function toggleNone(i) {
    const sections = ['abilities', 'stats', 'evolution'];

    sections.forEach((id, index) => {
        document.getElementById(id).classList.toggle('dnone', index + 1 !== i);
    });
}

function eventListener() {
    overlay = document.getElementById('overlay')
    overlay.addEventListener('click', function (event) {

        if (event.target === overlay) {
            removeOverlay()
        }
    });
};

function removeOverlay() {
    overlay.innerHTML = "";
    overlay.classList.remove("overlay")
    document.body.classList.remove("overflow-body")
}

function addOverlay(ContentRef) {
    ContentRef.innerHTML = ""
    ContentRef.classList.add("overlay")
    document.body.classList.add("overflow-body")
}


async function getEvolutionChainData(pokemonName) {
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`;
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();
    const evoUrl = speciesData.evolution_chain.url;

    const evoResponse = await fetch(evoUrl);
    const evoData = await evoResponse.json();
    return extractEvolutionData(evoData);
}


function extractEvolutionData(evoData) {
    let evolutionNames = [evoData.chain.species.name];
    let currentStage = evoData.chain;
    while (currentStage.evolves_to.length > 0) {
        currentStage = currentStage.evolves_to[0];
        evolutionNames.push(currentStage.species.name);
    }
    const evolutionData = evolutionNames.map(name => {
        const match = AllPokemons.find(p => p.name === name);
        return {
            name: name,
            img: match ? match.img : null};});
    addimgToHtml(evolutionData);
}


function addimgToHtml(evolutionData) {
    contentRef = document.getElementById("evolutionContainer")
    contentRef.innerHTML = "";
    for (let i = 0; i < evolutionData.length; i++) {
        img = evolutionData[i].img
        contentRef.innerHTML += `<img src="${img}" alt="Pokemon Front">`
    }
}




