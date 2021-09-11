'use strict';

const container = {};

for (let i=0; i<10; i++){
    const value = {created: Date.now(), details: Math.random()}
    const key = 'item' + i;
    container[key] = value
}


for (let item of Object.keys(container)) {

    console.log(' BETTER_THAN_FOR_IN ', container[item]);

};
    

  