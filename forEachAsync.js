'use strict';

const container = [];
for (let i=0; i<10; i++){
    const value = {created: Date.now()}
    container.push(value);
}


const testForEach = async function(){

    container.forEach(async (item) => {
        const updated = await new Promise(resolve => {
            setTimeout(()=>{
                resolve(Date.now());
            },1000);
        });
        item.updated = updated;
        console.log(' ITEM: ', item);

    });
    container.forEach(item => console.log(item));

}

console.log(' EINS ');
testForEach();
console.log(' ZWEI ');


