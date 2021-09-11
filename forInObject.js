'use strict';

const container = {};

for (let i=0; i<10; i++){
    const value = {created: Date.now(), details: Math.random()}
    container['item'+i] = value
}


for (let item in container) {

    console.log(' DEPRECATED ', item, container[item]);

};
    

  