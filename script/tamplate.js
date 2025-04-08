function PokédexEntry(i, array) {
    return `   <a class="animation-pokedex" onclick="showPokemonInfo(${i})"><div class="PokedexEntry pokedex-card-form ${array[i].abilitis.types[0]}-shadow">
     <div class="flex-center">
     <p class="pokemon-id padding-top">N°${array[i].id}</p>
     </div>
            <div class="entry-header">
             <h2>${array[i].name}</h1>
            </div>
           
            <div class="flex-space" id="typeEntry${i}"></div>
        </div>
        <img class="possition-pokemon" src= ${array[i].img} alt="Pokem-Abildung">
        </a>`
}

function PokédexInfo(i) {
    return ` <div class="PokédexInfo flex-colum">
    <div class="flex-center background-pokeInfo"><img src="${AllPokemons[i].img}" alt="Pokem-Abildung"></div>

    <div class="flex-colum flex-center">
        <p class="">N°${AllPokemons[i].id}</p>
        <h2>${AllPokemons[i].name}</h2>
        <div>
            <div class="flex-space" id="typeInfo${i}"></div>
            <h3 class="text-align ">Pokedex Entry</h3>
            <p class="text-align ">${AllPokemons[i].entryText}</p>
        </div>

        <div class="flex-center padding-5px">
            <button class="button-13" role="button" onclick="toggleNone(1)">ABILITIES</button>
            <button class="button-13" role="button" onclick="toggleNone(2)">STATS</button>
            <button class="button-13" role="button" onclick="toggleNone(3)">EVOLUTION</button>
        </div>

        <div id="abilities" class="flex-colum">
            <h3 class="text-align abilitih3">ABILITIES</h3>
            <div class="flex-center gap" id="pokemonAbilities"></div>
            <div class="flex-center flex-space gap-50px">
                <div class="text-align"><p>HEIGHT<p class="pokemonheight">${AllPokemons[i].height * 10} CM</p></p></div>
                <div class="text-align"><p>WEIGHT<p class="pokemonheight">${AllPokemons[i].weight / 10} KG</p></p></div>  
            </div>
        </div>

        <div id="stats" class="dnone">
            <h3 class="text-align">STATS</h3>
            <div class="flex-center flex-wrap gap-20px padding-50px text-align">
            <div flec-colum>
                <p class="p-pokeinfo stat-hp">HP</p><p class="p-pokeinfo">${AllPokemons[i].abilitis.stats.hp}</p>
            </div>
             <div flec-colum>
                <p class="p-pokeinfo stat-atk">ATK</p><p class="p-pokeinfo">${AllPokemons[i].abilitis.stats.attack}</p>
            </div>
            <div flec-colum>
                <p class="p-pokeinfo stat-def">DEF</p><p class="p-pokeinfo">${AllPokemons[i].abilitis.stats.defense}</p>
            </div>
            <div flec-colum>
                <p class="p-pokeinfo stat-spa">SP. ATK</p><p class="p-pokeinfo">${AllPokemons[i].abilitis.stats['special-attack']}</p>
            </div>
            <div flec-colum>
                <p class="p-pokeinfo stat-spd ">SP. DEF</p><p class="p-pokeinfo">${AllPokemons[i].abilitis.stats['special-defense']}</p>
            </div>
            <div flec-colum>
                <p class="p-pokeinfo stat-spe">SPEED</p><p class="p-pokeinfo">${AllPokemons[i].abilitis.stats.speed}</p>
              </div>  
            </div>
        </div>

        <div id="evolution" class="dnone">
            <h3 class="text-align">EVOLUTION</h3>
            <div>
                <img src="${AllPokemons[i].img}" alt="">
                <img src="${AllPokemons[i + 1].img}" alt="">
                <img src="${AllPokemons[i + 2].img}" alt="">
            </div>
        </div>
    </div> <!-- Diese Div hier war wahrscheinlich die fehlende -->
</div>`
}
