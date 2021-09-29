(() => {

    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10
    }
    
    enum Enumeraciones{
        a=10,
        b,
        c=9,
        d
    }

    let currentAudio = AudioLevel.medium;

    console.log(AudioLevel);
    console.log(currentAudio);
    console.log(Enumeraciones.d);

  })()