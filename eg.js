
setTimeout(()=>{
    console.log('eeeee');
})
console.log('changed in main'); //main
console.log('changed in main'); //main
setTimeout(()=>{
    console.log('this is it');  
},1000)
console.log(`changed main`);   //main
setTimeout(()=>{
    console.log('ssssssswwwww');  
})
console.log('changed in feature')
setTimeout(()=>{
    console.log('ssssssaaaaaaaaswwwww');
})



