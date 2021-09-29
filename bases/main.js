"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaAcuaman = fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, texto, boleano, arreglo) { return void {}; };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    console.log(noHaceNadaTampoco(1, 'xd', true, ['xd', 'dx']));
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || '------')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '------');
        }
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '------');
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
})();
(function () {
    var hero = 'Dlash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Súper fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(superman.getName());
})();
(function () {
    var myCustomVariable = 'Skrow';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Velocidad']
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.234564654654;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    console.log(numbers);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var Enumeraciones;
    (function (Enumeraciones) {
        Enumeraciones[Enumeraciones["a"] = 10] = "a";
        Enumeraciones[Enumeraciones["b"] = 11] = "b";
        Enumeraciones[Enumeraciones["c"] = 9] = "c";
        Enumeraciones[Enumeraciones["d"] = 10] = "d";
    })(Enumeraciones || (Enumeraciones = {}));
    var currentAudio = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(currentAudio);
    console.log(Enumeraciones.d);
})();
(function () {
    var abc = function (message) {
        throw new Error(message);
    };
    abc('Auxilio!');
})();
(function () {
    var isActive = true;
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaverde = "Linterna's verde";
    var volcanNegro = "H\u00E9roe: Vocan Negro";
    console.log("I'm " + batman);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map