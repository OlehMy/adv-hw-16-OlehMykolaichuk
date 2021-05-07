import './style.css';

import { profitIncludingDiscount } from './hws/hw-1';
import { approval } from './hws/hw-2';
import { isPalyndrom } from './hws/hw-3';
import { getMarksForPairs } from './hws/hw-4';
import { divideByThree } from './hws/hw-5';
import { calculateWordLetters } from './hws/hw-6';
import { getMyTaxes } from './hws/hw-7';
import { jackSmith } from './hws/hw-8';
import { genarateRgbColor } from './hws/hw-10';
import { getKayCode } from './hws/hw-11';
import { getRandomChinese } from './hws/hw-12';
import { title } from './hws/hw-13';
import { idGenerator } from './hws/hw-15';


console.log(`Profit including discount: ${profitIncludingDiscount}`);
console.log(`Функція №10: ${isPalyndrom("Я несу гусеня")}`);
console.log('Random marks for pairs of students', getMarksForPairs(pairsOfStudents, themes));
console.log('The word is divided into syllables of 3 letters:', divideByThree('qweqweq WEQWEQW'));
console.log(`Object with letters of the word '${someWord}'`, calculateWordLetters(someWord));
console.log(`The amount of salary tax in ${myCountry.name}:`, getMyTaxes.call(myCountry, 2000));
console.log(`General information about the student:`, jackSmith.getInfo);
console.log('genarateRgbColor: ', genarateRgbColor());
console.log('getKayCode: ', getKayCode());
console.log('getRandomChinese:', getRandomChinese(10));
console.log('title: ', title);
console.log('idGenerator: ', idGenerator.next().value);