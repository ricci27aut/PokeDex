function PokédexEntry(i) {
    return `   <div class="PokedexEntry div-shadow">
            <div class="entry-header">
                <p class="pokemon-id">${AllPokemons[i].id}</p>
                <h2>${AllPokemons[i].name}</h1>
            </div>
            <div class="flex-center"><img src= ${AllPokemons[i].img} alt="Pokem-Abildung"></div>
            <div>
                <p class="${AllPokemons[i].type}">${AllPokemons[i].type}</p>
            </div>
        </div>`
}

function PokédexInfo(i) {
    return `    </div>
            <div class="flex-center"><img src= ${AllPokemons[i].img} alt="Pokem-Abildung"></div>
            
            <div>
             <p class="pokemon-id">${AllPokemons[i].id}</p>
            <h2>${AllPokemons[i].name}</h2>
             <p class="${AllPokemons[i].type}">${AllPokemons[i].type}</p>
            </div>

             <div>
                <h3>Pokedex Entry</h3>
                <p>"flavor_text_entries"</p>
            </div>

            <div>
                <h3>ABILITIES</h3>
                <p></p>
                <p></p>
            <p>HEIGHT</p>
            <p>WEIGHT</p>
            </div>

            <div>
                <h3>STATS</h3>
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SP. ATK</p>
                <p>SP. DEF</p>
                <p>SPEED</p>
            </div>

            <div>
            <h3>EVOLUTION</h3>
            <div>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            </div>

    <div class="PokedexEntry div-shadow">
            <div class="entry-header">
               
                
           
         
            </div>
        </div>`
}