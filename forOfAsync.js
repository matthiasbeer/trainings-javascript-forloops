'use strict';

const container = [];
for (let i=0; i<10; i++){
    const value = {created: Date.now()}
    container.push(value);
}

const testForOf = async function(){

    for (let item of container) {

        const updated = await new Promise(resolve => {
            setTimeout(()=>{
                resolve(Date.now());
            },1000);
        });
        item.updated = updated;

        console.log(' ITEM0 ', item);

    };
    

    container.forEach(item => console.log(' ITEM1 ', item));

}


console.log(' EINS ');
testForOf();
console.log(' ZWEI ');


