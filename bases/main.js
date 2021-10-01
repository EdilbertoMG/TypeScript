"use strict";
var Validations;
(function (Validations) {
    Validations.validtaeText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validtaeText('Skrow'));
//# sourceMappingURL=main.js.map