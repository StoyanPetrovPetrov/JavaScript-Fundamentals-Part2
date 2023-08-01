'use strict';
function logger() {
    console.log('My name is Stoyan')
}

logger();
logger();
logger();

function fruitProccesor(apples, oranges) {
    const juise = `Juis whit ${apples} apples and ${oranges} oranges.`;
    return juise;
}
const appleJuise = fruitProccesor(5, 0);
console.log(appleJuise);

const appleOrangeJuise = fruitProccesor(2, 4);
console.log(appleOrangeJuise);

const num = Number('23');
