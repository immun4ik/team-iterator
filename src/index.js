
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
        this.numberOfMembers = 0;
    }

    add(character) {
        if (!(character instanceof Character)) {
            throw new Error('Можно добавлять только объекты Character');
        }
        this.members.push(character);
        this.numberOfMembers += 1;
    }

    // Iterator
    [Symbol.iterator]() {
        let current = 0;
        const { members, numberOfMembers } = this;
        return {
            next() {
                if (current < numberOfMembers) {
                    return {
                        value: members[current++],
                        done: false,
                    };
                }
                return {
                    value: undefined,
                    done: true,
                };
            },
        };
    }
}

// example

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