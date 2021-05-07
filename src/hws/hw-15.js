const idGeneratorBut = document.querySelector('#id-generator');
const idNumber = document.querySelector('#id-number');
const fontSizeUp = document.querySelector('#font-size-up');
const fontSizeDown = document.querySelector('#font-size-down');
const someText = document.querySelector('#id-number');

function* createIdGenerator() {
    let i = 1;
    while (i < Infinity) {
        yield i++;
    };
};
export const idGenerator = createIdGenerator();

// idGeneratorBut.addEventListener('click', () => {
//     idNumber.innerHTML = '';
//     idNumber.innerHTML = `${idGenerator.next().value}`
// })


// let defaultValue = 14;

// function* newFontGenerator(upOrDown) {
//     while (defaultValue) {
//         if (upOrDown === 'up') {
//             yield defaultValue = defaultValue + 2;
//         } else if (upOrDown === 'down') {
//             yield defaultValue = defaultValue - 2;
//         };
//     };
// };

// const fontGeneratorUp = newFontGenerator("up");
// const fontGeneratorDown = newFontGenerator("down");

// fontSizeUp.addEventListener('click', () => {
//     document.querySelector('html').style.fontSize = `${fontGeneratorUp.next().value}px`;
// })

// fontSizeDown.addEventListener('click', () => {
//     document.querySelector('html').style.fontSize = `${fontGeneratorDown.next().value}px`;
// })