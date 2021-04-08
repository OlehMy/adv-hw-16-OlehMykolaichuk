async function getRandomChinese(length) {
    let result = '';
    let i = 0;

    while (i < length) {

        const promise = new Promise((resolve) => {

            setTimeout(() => {
                let sign = String.fromCharCode(String(Date.now()).substr(-5));
                resolve(sign);
            }, 50);

        });

        await promise.then(sign => {
            result += sign;
        });
        i++;
    };

    console.log('result:', result);
};

getRandomChinese(10);