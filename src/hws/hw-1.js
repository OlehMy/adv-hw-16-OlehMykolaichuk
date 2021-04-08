const breadPriceEa = 15.678;
const meatPriceKg = 123.965;
const tomatoesPriceKg = 90.2345;

// console.log(`Bread price: ${breadPriceEa} uah/ea`);
// console.log(`Meat price: ${meatPriceKg} uah/kg`);
// console.log(`Tomatoes price: ${tomatoesPriceKg} uah/kg`);

// Виведіть максимальне число
const maxPrice = Math.max(breadPriceEa, meatPriceKg, tomatoesPriceKg);
// console.log(`Max price: ${maxPrice}`);

// Виведіть мінімальне число
const minPrice = Math.min(breadPriceEa, meatPriceKg, tomatoesPriceKg);
// console.log(`Min price: ${minPrice}`);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumOfPrices = breadPriceEa + meatPriceKg + tomatoesPriceKg;
// console.log(`Sum of prices: ${sumOfPrices}`);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону
const sumOfIntegersOfPrices = Math.floor(breadPriceEa) + Math.floor(meatPriceKg) + Math.floor(tomatoesPriceKg);
// console.log(`Sum of integers of prices: ${sumOfIntegersOfPrices}`);

// Виведіть суму товарів округлену до сотень
const roundedToHundredsSumOfPrices = Math.round(sumOfPrices * 0.01) * 100;
// console.log(`Rounded to hundreds sum of prices: ${roundedToHundredsSumOfPrices}`);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const sumOfIntegersOfPricesIsEven = (sumOfIntegersOfPrices % 2) === 0;
// console.log(`Sum of integers of prices is even number: ${sumOfIntegersOfPricesIsEven}`);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн
const banknote500Uah = 500;
const theRestFrom500Uah = banknote500Uah - sumOfPrices;
// console.log(`The rest from 500 uah: ${theRestFrom500Uah}`);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePriceOfProducts = (sumOfPrices / 3).toFixed(2);
// console.log(`The average price of products: ${averagePriceOfProducts}`);

// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random)
const randomDiscount = Math.random();

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми
const amountIncludingDiscount = (sumOfPrices * (1 - randomDiscount)).toFixed(2)
    // console.log(`Amount to be paid including discount: ${amountIncludingDiscount}`);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни
export const profitIncludingDiscount = (amountIncludingDiscount - (sumOfPrices / 2)).toFixed(2);
console.log(`Profit including discount: ${profitIncludingDiscount}`);