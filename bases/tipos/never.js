"use strict";
(function () {
    var abc = function (message) {
        throw new Error(message);
    };
    abc('Auxilio!');
})();
