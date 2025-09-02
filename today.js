console.log('1');
async function firstPop() {
    console.log('wow mainq');
    console.log('chow mainq'); //main
    let k = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('2');
            res()
        }, 2000)
    })
    await k;
    console.log('lol main'); //main
    console.log('3');
}

firstPop()