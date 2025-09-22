console.log('1');
async function firstPop() {
    console.log('wow mainq');
    console.log('lll model');
    console.log(a);
    console.log(z);
<<<<<<< HEAD
    console.log(popnext);
=======
    console.log(pop);
    
>>>>>>> 7d38c3b652dc7d3c5b9eb58908b7d3f99736186a
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
console.log('wow feature');
firstPop()