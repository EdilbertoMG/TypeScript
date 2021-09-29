"use strict";
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
