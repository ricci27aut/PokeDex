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
    let contentRef = document.getElementById('type'+place+i);
    contentRef.innerHTML = "";

    let types = array[i].abilitis.types;

    for (let j = 0; j < types.length; j++) {
        const type = types[j];
        contentRef.innerHTML += `<p class="${type} p-pokedex">${type}</p>`;
    }
}

function showPokemonInfo(i) {
    let ContentRef = document.getElementById('Pokemon-info')
    ContentRef.innerHTML = ""
    ContentRef.innerHTML += PokédexInfo(i)
    splitTyps(i, AllPokemons, "Info")
    splitAbilitis(i)
}

function renderMorePokemon(){
    document.getElementById("Button-more").disabled = true;
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
    }if (searchTerm.length == 0) {
        showPokedex(AllPokemons)
    }
}

function loadMorePokemon(searchTerm) {
    const filtered = AllPokemons.filter(pokemon => pokemon.name.includes(searchTerm));
      return filtered;
}

function toggleNone(i) {
        const sections = ['abilities', 'stats', 'evolution'];
        
        sections.forEach((id, index) => {
            document.getElementById(id).classList.toggle('dnone', index + 1 !== i);
        });
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