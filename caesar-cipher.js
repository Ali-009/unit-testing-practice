//Both our functions need to reference this array
function caesarCipher(plainText, key){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
,'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'
,'t', 'u', 'v', 'w', 'x', 'y', 'z'];

    let cipherText = plainText.replace(/[a-zA-Z]/g, (match) => {
        let alphabetIndex 
        = alphabet.findIndex(element => element === match.toLowerCase());
        //toLowerCase() and toUpperCase() methods are used to account for case in the plaintext
        if(match === match.toUpperCase()){
        /*We shift the element by the provided key, and use the modulo operation to make sure don't go beyond the boundaries of the alphabet array*/
            return alphabet[(alphabetIndex + key)%26].toUpperCase();
        } else {
            return alphabet[(alphabetIndex + key)%26];
        }
    });
    return cipherText;
}

export {caesarCipher}