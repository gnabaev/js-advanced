const Character = function (name, race, language) {
    this.name = name;
    this.race = race;
    this.language = language;
}

Character.prototype.Speak = function (speech) {
    console.log(speech);
}

const Orc = function (name, race, language, weapon) {
    Character.call(this, name, race, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function (damage) {
    console.log(damage);
}

const Elf = function (name, race, language, spell) {
    Character.call(this, name, race, language);
    this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function (spell) {
    console.log(spell);
}

const orc = new Orc('Name', 'Orc', 'RU', 'Sword');
console.log(orc);
orc.hit(50);