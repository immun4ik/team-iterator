class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 50;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}

class Team {
    constructor() {
        this.members = [];
    }

    add(character) {
        this.members.push(character);
    }

    *[Symbol.iterator]() {
        for (const member of this.members) {
            yield member;
        }
    }
}

// ������ �������������
const team = new Team();
team.add(new Character('������', 'Bowman'));
team.add(new Character('������', 'Swordsman'));
team.add(new Character('���', 'Magician'));

for (const character of team) {
    console.log(character);
}