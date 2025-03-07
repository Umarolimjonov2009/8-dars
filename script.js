
const narsalar = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

let nharfibori = [];
let nharfiyogi = [];

for (let i = 0; i < narsalar.length; i++) {
    if (narsalar[i].includes('n')) {
        nharfibori.push(narsalar[i]);
    } else {
        nharfiyogi.push(narsalar[i]);
    }
}

console.log(nharfibori, "'n' harfi ishtirok etgan so'zlar");
console.log(nharfiyogi, "'n' harfi ishtirok etmagan so'zlar");
