class Character1 {
    name;
    language;
    race;

    constructor(name, language, race) {
        this.name = name;
        this.language = language;
        this.race = race;
    }

    speak() {
        console.log(`Имя: ${this.name}, язык: ${this.language}, раса: ${this.race}`);
    }
}

class Orc1 extends Character1 {
    weapon;
    constructor(name, language, weapon) {
        super(name, language);
        this.race = 'Orc';
        this.weapon = weapon;
    }

    speak() {
        console.log(`Имя: ${this.name}, язык: ${this.language}, оружие: ${this.weapon}`);
    }

    hit(damage) {
        console.log(damage);
    }
}

class Elf1 extends Character1 {
    spell;
    constructor(name, language, spell) {
        super(name, language);
        this.race = 'Elf';
        this.spell = spell;
    }

    speak() {
        console.log(`Имя: ${this.name}, язык: ${this.language}, заклинание: ${this.spell}`);
    }

    createSpell(spell) {
        this.spell = spell;
        console.log(this.spell);
    }
}

const character1 = new Character1('Character', 'RU', 'Orc');
console.log(character1);
character1.speak();

const orc1 = new Orc1('Name', 'RU', 'Sword');
console.log(orc1);
orc1.speak();
orc1.hit(50);

const elf1 = new Elf1('Name', 'RU', 'Spell');
console.log(elf1);
elf1.speak();
elf1.createSpell('Spell 1');
