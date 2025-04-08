function showPokedex(array) {
    let ContentRef = document.getElementById('content')
    ContentRef.innerHTML = ""
    for (let i = 0; i < PokeAmount; i++) {
        ContentRef.innerHTML += PokédexEntry(i, array)
        splitTyps(i, array)
    }
}

function splitTyps(i, array) {
    let contentRef = document.getElementById('type'+i);
    contentRef.innerHTML = "";

    let types = array[i].abilitis.types;

    for (let j = 0; j < types.length; j++) {
        const type = types[j];
        contentRef.innerHTML += `<p class="${type} p-pokedex">${type}</p>`;
    }
}

function showPokemonInfo(i) {//Groß ansicht pokemon info
    let ContentRef = document.getElementById('Pokemon-info')
    ContentRef.innerHTML = ""
    ContentRef.innerHTML += PokédexInfo(i)
}

function renderMorePokemon(){
    PokeAmount = PokeAmount + 20;
    fetchPokeDex()
}

function searchForPokemon() {
    searchTerm = document.getElementById('search').value.toLowerCase();

    if (searchTerm.length >= 3) {
        findPokemon = loadMorePokemon(searchTerm);
        showPokedex(findPokemon) 
    }if (searchTerm.length == 0) {
        showPokedex(AllPokemons)
    }
}

function loadMorePokemon(searchTerm) {
    const filtered = AllPokemons.filter(pokemon => pokemon.name.includes(searchTerm));
      return filtered;
}