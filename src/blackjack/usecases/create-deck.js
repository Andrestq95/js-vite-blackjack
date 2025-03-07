
import _ from 'underscore';

export let nombre = 'Andres Tabera';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposCarta ejemplo: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<string>} retorna un nuevo deck de cartas 
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if(!tiposCarta || tiposCarta === 0) 
        throw new Error('tipos de carta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales === 0) 
        throw new Error('tipos especiales es obligatorio como un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    
    return deck;
}

//export default crearDeck;