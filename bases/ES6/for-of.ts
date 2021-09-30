(()=>{
    
    type Avengers = {
        name: string,
        weapon: string
    }

    const ironman: Avengers = {
        name: 'Ironman',
        weapon: 'Amorsuit'
    }

    const capAmerica: Avengers = {
        name: 'Capitan América',
        weapon: 'Escudo'
    }

    const thor: Avengers = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avengers[] = [ironman, thor, capAmerica];

    for (const avenger of avengers) {
        console.log({ avenger });       
    }
    
})()