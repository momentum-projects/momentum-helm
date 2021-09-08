function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");


    function nextNumber(i: number, max: number) {
        if (i < max) {
            delay(500, i).then( () => {
                console.log(i);
                nextNumber(i+1, max);
            });
        }

    }

    nextNumber(0, 5);
    // await is converting Promise<number> into number

    console.log("World!");
}

dramaticWelcome();