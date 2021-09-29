(()=>{
    // objetos con tipos específicos
    let flash: {name: string, age?: number, powers: string[], getName: () => string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }
    
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Súper fuerza'],
        getName(){
            return this.name;
        }
    }

    console.log( flash.getName());

})()