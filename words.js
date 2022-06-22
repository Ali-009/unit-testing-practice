
function capitalize(myString){
    const capitalizedString = myString
    .replace(/\b[a-z]/g, (match) => match.toUpperCase());
    //'\b' is a Boundary Assertion in regex, used here to find the first letter of every word
    return capitalizedString;
}

function reverseString(myString){
    let stringReversed = '';
    for(let i = 0; i < myString.length; i++){
        stringReversed 
        += myString.charAt(myString.length - (i+1));
    }

    return stringReversed;
}

export {capitalize, reverseString}