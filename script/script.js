function showPokedex() {
    let ContentRef = document.getElementById('content')
    ContentRef.innerHTML = ""
    for (let i = 0; i < AllPokemons.length; i++) {
        ContentRef.innerHTML += PokédexEntry(i)
    }
}