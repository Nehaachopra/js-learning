for (let i = 0; i < 10; i++) {
    console.log(i);
}

const superHeroes = ["Superman" , "Batman", "Flash"];

for (const superHero of superHeroes) {
    console.log(superHero);
}

const map = new Map();
map.set('IN', 'India')
map.set( 'USA', 'United States Of America')
map.set( 'FR', 'France')

console.log(map);

for (const [key, value] of map) {
    console.log(key);
}

const caLevels = {
    level1: "Foundation",
    level2: "Intermediate",
    level3: "Finals"
}

// for (const [key, value] of caLevels) {
//     console.log(value);
// } //Objects not iteratable!!!

