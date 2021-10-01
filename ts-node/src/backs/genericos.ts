// exportacion de uno a uno
// import { Hero } from "./classes/Hero";
// exportacion de uno a uno con alias
// import { Hero, Hero2 as SuperHero } from "./classes/Hero";
// exportacion de todo
// import * as HeroClasses from "./classes/Hero";
// exportacion por defecto
// import powers, { Power } from "./data/data";

import { genericFunction, printObject, genericFunctionArrow } from '../generics/generics';
import { Villain } from '../interfaces';

// const ironman = new Hero('Ironman', 1, 55);

// const Hero2 = new HeroClasses.Hero2();

// console.log( powers );

// console.log(ironman.power);

// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject([1,2,3]);
// printObject('Hola Mundo');

// console.log( genericFunction(3.141618).toFixed(2) );
// console.log( genericFunction('Hola Mundo').toUpperCase() );
// console.log( genericFunction(new Date()).getDate() );

// console.log( genericFunctionArrow(3.141618).toFixed(2) );
// console.log( genericFunctionArrow('Hola Mundo').toUpperCase() );
// console.log( genericFunctionArrow(new Date()).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel );
