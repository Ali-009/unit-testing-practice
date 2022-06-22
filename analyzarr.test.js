import { analyzeArray } from "./analyzarr.js";
import {describe, test, expect} from '@jest/globals'

test('Test 1', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
})

test('Test 2', () => {
    expect(analyzeArray([4,3,1,5,9])).toEqual({
        average: 4.4,
        min: 1,
        max: 9,
        length: 5,
    });
});