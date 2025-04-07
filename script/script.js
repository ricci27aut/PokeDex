function showPokedex() {
    let ContentRef = document.getElementById('content')
    ContentRef.innerHTML = ""
    for (let i = 0; i < AllPokemons.length; i++) {
        ContentRef.innerHTML += PokédexEntry(i)
    }
    showPokemonInfo(1) 
}

function showPokemonInfo(i) {
    let ContentRef = document.getElementById('Pokemon-info')
    ContentRef.innerHTML = ""
    ContentRef.innerHTML += PokédexInfo(i)
}