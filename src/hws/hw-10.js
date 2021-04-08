const title = document.getElementById('title');
const generateBlocksButton = document.getElementById('generate__blocks');
const blocksIntervalButton = document.getElementById('blocks__interval');

let blocksContainer;

export function genarateRgbColor() {
    let rgbColor = [];
    for (let i = 0; i < 3; i++) rgbColor.push(Math.trunc(Math.random() * 256));
    return `rgb(${rgbColor})`;
}
console.log('genarateRgbColor: ', genarateRgbColor());

function callFunctions() {
    isInvisible();
    generateBlocks();
}

function isInvisible() {
    title.classList.toggle('invisible');
    blocksIntervalButton.classList.toggle('invisible__none');
}

function generateBlocks() {
    blocksContainer = document.createElement('div');
    blocksContainer.style.cssText = `display: flex; flex-wrap: wrap; width: 250px; height: 250px; position: absolute; top: 35%; left: calc(50% - 125px); `;
    blocksContainer.setAttribute('id', 'blocks__container');
    title.before(blocksContainer);
    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.style.cssText = `width: 50px; height: 50px; border-radius: 8px; background-color: ${genarateRgbColor()}`;
        blocksContainer.prepend(block);
    };
    generateBlocksButton.disabled = true;
}

function generateBlocksInterval() {
    setInterval(() => {
        if (!blocksContainer) {
            generateBlocks();
        }
        blocksContainer.remove();
        generateBlocks();
    }, 1000);
    blocksIntervalButton.disabled = true;
}

function resetPage() {
    document.location.reload();
}