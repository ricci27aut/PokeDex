function PokédexEntry(i) {
    return `   <div class="PokedexEntry div-shadow">
     <div class="flex-center"><img src= ${AllPokemons[i].img} alt="Pokem-Abildung"></div>
            <div class="entry-header">
             <p class="pokemon-id">${AllPokemons[i].id}</p>
             <h2>${AllPokemons[i].name}</h1>
            </div>
           
            <div>
                <p class="${AllPokemons[i].abilitis.types}">${AllPokemons[i].abilitis.types}</p>
            </div>
        </div>`
}

function PokédexInfo(i) {
    return ` <div class="PokedexEntry">
            <div class="flex-center"><img src= ${AllPokemons[i].img} alt="Pokem-Abildung"></div>
            
            <div>
             <p class="">${AllPokemons[i].id}</p>
            <h2>${AllPokemons[i].name}</h2>
             <p class="${AllPokemons[i].type}">${AllPokemons[i].type}</p>
            </div>

             <div>
                <h3>Pokedex Entry</h3>
                <p>${AllPokemons[i].entryText}</p>
            </div>

            <div>
                <h3>ABILITIES</h3>
                <p></p>
                <p></p>
            <p>HEIGHT<p>${AllPokemons[i].height *10} CM</p></p>
            <p>WEIGHT<p>${AllPokemons[i].weight/10} KG</p></p>
            </div>

            <div>
                <h3>STATS</h3>
                <p>HP</p><p>${AllPokemons[i].abilitis.stats.hp}</p>
                <p>ATK</p><p>${AllPokemons[i].abilitis.stats.attack}</p>
                <p>DEF</p><p>${AllPokemons[i].abilitis.stats.defense}</p>
                <p>SP. ATK</p><p>${AllPokemons[i].abilitis.stats['special-attack']}</p>
               <p>SP. DEF</p><p>${AllPokemons[i].abilitis.stats['special-defense']}</p>
                <p>SPEED</p><p>${AllPokemons[i].abilitis.stats.speed}</p>
            </div>

            <div>
            <h3>EVOLUTION</h3>
            <div>
            <img src="${AllPokemons[i].img}" alt="">
            <img src="${AllPokemons[i+1].img}" alt="">
            <img src="${AllPokemons[i+2].img}" alt="">
            </div>
            </div>
        </div>`
}