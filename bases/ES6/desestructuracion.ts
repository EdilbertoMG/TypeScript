(()=>{
    
    type Avengers= {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number,
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Doynewy Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    //const {poder, vision} = avengers;

    //console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvernger = ( { ironman, ...resto }:Avengers ) =>{
        console.log( ironman, resto );
    }
    
    // printAvernger( avengers );

    const averngerArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];

    const [capitan, ironman, ] = averngerArr;

    //console.log(capitan, ironman)
})()