const request1 = new XMLHttpRequest();
request1.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request1.send();

request1.addEventListener('load', function () {
    const ditto = JSON.parse(this.responseText);
    const abilityUrl = ditto.abilities[0].ability.url;

    const request2 = new XMLHttpRequest();
    request2.open('GET', abilityUrl);
    request2.send();

    request2.addEventListener('load', function () {
        const ability = JSON.parse(this.responseText);
        console.log(ability.effect_entries[1].effect);
    })
})