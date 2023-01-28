import {DateService} from "./modules/dateService.js";
const date = new DateService();
console.log(date.getCurrentDate());



import { sumOfArray } from "./modules/arraySumFunc.js";
import { countWords } from "./modules/countWords.js";
import { maxValue } from "./modules/maxValue.js";
import { checkPollindrom } from "./modules/checkPollindrom.js";
import { concatArray } from "./modules/concatArray.js";
import { uniqueArray } from "./modules/uniqueArray.js";
import { vowels } from "./modules/vowels.js";

console.log('First task. The sum of the array elements is', sumOfArray([1, 2, 3]));
console.log('Second task. The total number of words is', countWords('The quick brown fox jumped over the lazy dog'));
console.log('Third task. The maximum value in the array is', maxValue([5, 3, 10, 27, 6, 12]));

//done in class
console.log('Fourth task. Checking if a word is a pollindrom:', checkPollindrom('Hello'));
console.log('Fifth task. Concat of arrays:', concatArray([1, 2, 3], [4, 5, 6]));
console.log('Sixth task. Unique array elements:', uniqueArray(['banana', 'banana', 'apple', 'apple']));
console.log('Seventh task. The total number of vowels is', vowels('The quick brown fox jumped over the lazy dog'));