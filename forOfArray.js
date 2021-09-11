'use strict';

const container = [];
for (let i=0; i<10; i++){
    const value = {created: Date.now(), details: Math.random()}
    container.push(value);
}


for (let item of container) {

    console.log(' ITEM ', item);

};
    

  