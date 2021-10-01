import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = 'Pikachu'

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
charmander.publicApi = 'https://skrow.com';
console.log( charmander );
