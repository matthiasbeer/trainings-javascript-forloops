

let testArray = ['a', 'b', 'c', 'd'];

const testfuncforeach = () => {
    testArray.forEach(el => {
        if (el == 'c') {
            return "false";      // return bezieht sich nur auf aktuellen loop, schleife geht weiter
        }
        console.log(el);
    });
    return true;
}

const testfuncforof = () => {
    for (const el of testArray) {
        if (el == 'c') {
            return "false";     // return bezieht sich wirklich auf funktion !
        }
        console.log(el);
    }
    return true;
}

console.log('FOREACH ', testfuncforeach());
console.log('  FOR   ', testfuncforof());