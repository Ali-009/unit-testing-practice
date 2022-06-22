import {describe, expect, test} from '@jest/globals'
import {capitalize, reverseString} from "./words.js"

//We start by writing the test first even though we haven't written the function capitalize yet
//Below are tests for capitalize
test('The first word is capitalized', () => {
    expect(capitalize('someString')).toBe('SomeString');
    expect(capitalize('anotherString')).toBe('AnotherString');
});

test('The letter of every word in a sentence is capitalized', () => {
    expect(capitalize('This is just a random long sentence to test my little capitalize function')).toBe('This Is Just A Random Long Sentence To Test My Little Capitalize Function');
});
/*We use triangulation here to make sure
that our program satisfied different use cases
instead of just returning 'SomeString'*/

//Below are tests for the reverseString function
test('Reverse a word', () => {
    expect(reverseString('palindrome')).toBe('emordnilap');
    expect(reverseString('racecar')).toBe('racecar');
});

test('Reverse a sentence', ()=> {
    expect(reverseString('This is just a random sentence, but I shouldn\'t make it too long')).toBe('gnol oot ti ekam t\'ndluohs I tub ,ecnetnes modnar a tsuj si sihT');
});