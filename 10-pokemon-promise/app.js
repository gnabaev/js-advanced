fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((pokemon) => fetch(pokemon.abilities[0].ability.url))
    .then((abilityUrl) => abilityUrl.json())
    .then((data) => console.log(data.effect_entries[1].effect))
    .catch(error => console.log(error));