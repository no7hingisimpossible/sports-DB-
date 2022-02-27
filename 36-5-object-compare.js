const first = { a: 1, b: 2 }
const second = { a: 1, b: 2 }
const third = first



// for (const property in first) {
//     if (first[property] === second[property]) {
//         console.log('equal')
//     }
//     else {
//         console.log('not equal')
//     }
// }
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const property in obj1) {
        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first, second)
console.log(isEqual)