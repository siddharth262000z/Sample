console.log('1');
async function firstPop() {
    let k = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('2');
            res()
        }, 2000)
    })
    await k;
    console.log('3');
}

firstPop()