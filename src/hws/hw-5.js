// 1) Створіть функцію, яка повертає масив випадкових цілих чисел
function getRandomArray(length, min, max) {
    let randomArray = [];
    if (min > max) {
        [min, max] = [max, min];
    }
    if (Number.isInteger(length) && Number.isInteger(min) && Number.isInteger(max)) {
        for (let index = 0; index < length; index++) {
            randomArray.push(Math.floor(min + Math.random() * (max - min + 1)))
        }
        return randomArray;
    } else {
        return 'Incorrectly entered data. Please, try again'
    }
}
const randomArray = getRandomArray(10, 1, 10, );
// console.log('Array of random integers:', randomArray);

// 3) Створіть функцію, яка рахує середнє арифметичне всіх переданих в неї аргументів
function getAverage(...numbers) {
    let numberIsAverage;
    const numbersArr = numbers.filter(number => Number.isInteger(number));
    return numberIsAverage = numbersArr.reduce((x, y) => x + y, 0) / numbersArr.length;
}
const numberIsAverage = getAverage(1, 2.3, 3, 4, 5, '5a');
// console.log('The arithmetic mean of all arguments:', numberIsAverage);

// 5) Створіть функцію, яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {
    let withoutEvenNumbersArr
    return withoutEvenNumbersArr = numbers.filter(number => Number.isInteger(number) && number % 2);
}
const withoutEvenNumbersArr = filterEvenNumbers(1, 2.3, 'a', 3, 4, 5, 8, '8a');
// console.log('Even numbers are:', withoutEvenNumbersArr);

// 6) Створіть функцію, яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
    let positiveNumbersInArr;
    return positiveNumbersInArr = numbers.filter(number => Number.isInteger(number) && number >= 0).length;
}
const positiveNumbersInArr = countPositiveNumbers(1, -1, -5, -7, 10, 5, 3, -11);
// console.log('The number of numbers is greater than 0:', positiveNumbersInArr);

// 7) Створіть функцію, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
    let dividedByFiveArr;
    return dividedByFiveArr = numbers.filter(number => Number.isInteger(number) && !(number % 5));
}
const dividedByFiveArr = getDividedByFive(1, -1, -5, -7, 10, 5, 3, -11, 15);
// console.log('Elements that are divisible by 5:', dividedByFiveArr);

// 9) Створіть функцію, яка розбиває кожне слово на умовні склади по 3 букви
function divideByThree(words) {
    let divideByThreeArr = [];
    let wordsArr = words.split(' ').join('').toLowerCase();
    for (let index = 0; index < wordsArr.length; index += 3) {
        divideByThreeArr.push(wordsArr.slice(index, index + 3));
    }
    return divideByThreeArr;
}
const divideByThreeArr = divideByThree('qweqweq WEQWEQW');
console.log('The word is divided into syllables of 3 letters:', divideByThreeArr);