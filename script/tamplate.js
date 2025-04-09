function PokédexEntry(i, array) {
    return `   <a class="animation-pokedex" onclick="showPokemonInfo(${array[i].id})"><div class="PokedexEntry pokedex-card-form ${array[i].abilitis.types[0]}-shadow">
     <div class="flex-center">
     <p class="pokemon-id padding-top">N°${array[i].id.toString().padStart(3, "0")}</p>
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
    return ` <div class="PokédexInfo flex-colum overlay-content"> 
    <div class="flex-center background-pokeInfo ${AllPokemons[i].abilitis.types[0]}-shadow"><img class="Pokemon-size-info" src="${AllPokemons[i].img}" alt="Pokemon Front"></div>

    <div class="flex-colum flex-center">
        <p class="">N°${AllPokemons[i].id.toString().padStart(3, "0")}</p>
        <h2 class="h2-underline">${AllPokemons[i].name}</h2>
        <div>
            <div class="flex-space" id="typeInfo${i}"></div>
            <h3 class="text-align ">Pokedex Entry</h3>
            <p class="text-align padding-5px">${AllPokemons[i].entryText}</p>
        </div>

        <div class="flex-center padding-5px">
            <button class="button-13" role="button" onclick="toggleNone(1)">ABILITIES</button>
            <button class="button-13" role="button" onclick="toggleNone(2)">STATS</button>
            <button class="button-13" role="button" onclick="getEvolutionChainData('${AllPokemons[i].name}'), toggleNone(3)">EVOLUTION</button>
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
            <div class="flex-center gap" id="evolutionContainer"></div>
        </div>
    </div>
    <img id="last-Button" onclick="lastPokeInfo(${AllPokemons[i].id})" class="last-pokemon" src="/img/icon/Pfeil-Links.png" alt="last Pokemon">
        <img id="nexst-Button" onclick="nextPokeInfo(${AllPokemons[i].id})" class="next-Pokemon" src="/img/icon/Pfeil-rechts.png" alt="next Pokemon">
        <img onclick="removeOverlay()" class="x-img" src="./img/icon/x-taste.png" alt="close">
</div>`
}
