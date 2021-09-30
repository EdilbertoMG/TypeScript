"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(superman.getName());
})();
//# sourceMappingURL=main.js.map