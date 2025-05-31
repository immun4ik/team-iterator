class Character {
    constructor({ name, type, health, level, attack, defence }) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}

export default class Team {
    constructor() {
        this.members = [];
    }

    add(character) {
        if (!(character instanceof Character)) {
            throw new Error('Tolko obekti Character');
        }
        this.members.push(character);
    }

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.members.length) {
                    return { done: false, value: this.members[index++] };
                } else {
                    return { done: true };
                }
            }
        };
    }
}


// Primer

const team = new Team();

const char1 = new Character({
    name: 'Hunter',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
});
const char2 = new Character({
    name: 'Warrior',
    type: 'Swordsman',
    health: 60,
    level: 1,
    attack: 30,
    defence: 20,
});
team.add(char1);
team.add(char2);

console.log('resultat:');
for (const member of team) {
    console.log(member);
}