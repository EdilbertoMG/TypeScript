namespace Validations{

    export const validtaeText = ( text: string ) => {
        return ( text.length > 3 ) ? true: false;
    }

    export const validateDate = (myDate: Date) => {
        return (isNaN(myDate.valueOf()))
        ? false
        : true
    }

}

console.log( Validations.validtaeText('Skrow') );