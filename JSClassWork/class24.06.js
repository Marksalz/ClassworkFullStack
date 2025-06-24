
let counter = 1;

function spellFactory(name) {
    const power = counter++;
    return function createSpell() {
        console.log(`${name} level ${power}`);
    };
}


const spell1 = spellFactory("1")
const spell2 = spellFactory("2")
const spell3 = spellFactory("menachem")

spell1() // 1 level 1
spell2() // 2 level 2
spell1() // 1 level 1
spell3() // menachem level 3