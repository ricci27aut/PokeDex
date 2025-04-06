function PokédexEntry(i) {
    return `   <div class="PokedexEntry div-shadow">
            <div class="entry-header">
                <p class="pokemon-id">${AllPokemons[i].id}</p>
                <h2>${AllPokemons[i].name}</h1>
            </div>
            <div class="flex-center"><img src= ${AllPokemons[i].img} alt="Pokem-Abildung"></div>
            <div>
                <p>${AllPokemons[i].type}</p>
            </div>
        </div>`
}