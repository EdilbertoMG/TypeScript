(()=>{
    class Apocalipsis{

        static instance: Apocalipsis;

        private constructor(public name: string){}

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }

            return Apocalipsis.instance;
        }
    }

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único');
    const apocalipsis = Apocalipsis.callApocalipsis();
    
})()