// класс персонажа (Character)
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

// команда с итератором и генератором
class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!(character instanceof Character)) {
            throw new Error('Можно добавлять только объекты Character');
        }
        this.members.add(character);
    }

    // Итератор 
    [Symbol.iterator]() {
        const iterator = this.members.values();
        return {
            next() {
                return iterator.next();
            },
        };
    }

    // Генератор (удобный итератор)
    *generator() {
        for (const member of this.members) {
            yield member;
        }
    }
}

// Демонстрация

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

console.log('Итератор:');
for (const member of team) {
    console.log(member);
}

console.log('Генератор:');
for (const member of team.generator()) {
    console.log(member);
}