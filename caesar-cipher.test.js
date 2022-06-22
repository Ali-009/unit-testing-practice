import { caesarCipher } from "./caesar-cipher.js";
import {test, describe, expect} from '@jest/globals'

//caesarCipher is a function that takes plaintext and a key as arguments
//A simple test for a shift of one
test('A simple test for a shift of one', () => {
    expect(caesarCipher('This is a short sentence that is only shifted by one position', 1)).toBe('Uijt jt b tipsu tfoufodf uibu jt pomz tijgufe cz pof qptjujpo');
});

test('Some sentences to test if the cipher works', () => {
    expect(caesarCipher('This is a short sentence that does not have any punctuation', 5)).toBe('Ymnx nx f xmtwy xjsyjshj ymfy itjx sty mfaj fsd uzshyzfynts');
    
    expect(caesarCipher('This text was taken from a functioning Caesar Cipher. I also need to make sure that I do account for punctuation, which could honestly be done using Regular Expressions or something. Right?', 5)).toBe('Ymnx yjcy bfx yfpjs kwtr f kzshyntsnsl Hfjxfw Hnumjw. N fqxt sjji yt rfpj xzwj ymfy N it fhhtzsy ktw uzshyzfynts, bmnhm htzqi mtsjxyqd gj itsj zxnsl Wjlzqfw Jcuwjxxntsx tw xtrjymnsl. Wnlmy?');
});

test('Test with sentences of variable lengths', () => {
    expect(caesarCipher('If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.', 7)).toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.');

    expect(caesarCipher('He who destroys a good book, kills reason itself.', 15)).toBe('Wt lwd sthigdnh p vdds qddz, zxaah gtphdc xihtau.');
});