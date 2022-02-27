// Keys, values, entries, delete, seal, freeze
const bottle = { color: 'olive', hold: 'water', price: 50 }
// to get all the keys or propery names. this method will give the names inside an array
const keys = Object.keys(bottle)
console.log(keys)
// to get all the values 
const values = Object.values(bottle)
// console.log(values)

// to get all the key value pairs which will be given inside a 2d array
const pairs = Object.entries(bottle)
// console.log(pairs)
// with seal you can modify property value but you cant add or delete
Object.seal(bottle)
delete bottle.price
bottle.price = 100
// console.log(bottle)

// with freeze you cant modifiy add or delete property 
Object.freeze(bottle)
bottle.price = 200
// console.log(bottle)



