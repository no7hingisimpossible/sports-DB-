// function add(num, num2 = 0) {
//     return num + num2;
// }
// const sum = add(2, 2)
// console.log(sum);

// const name = 'Fahim'
// const last = 'Madani'
// const sentence = `This is ${name} ${last}`
// // console.log(sentence)
// const friends = ['fahim', 'tomal', 'sadi', 'padi'];
// const something = `this person name is ${friends.length * 400} `
// console.log(something)
// const array = ['Toyota', 'Honda']
// const [model1, model2] = array
// console.log(model1)

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)
// const arr = [2, 4, 6, 8, 10];
// const newArr = []
// for (let number of arr) {
//     const tripled = number * 3
//     newArr.push(tripled);
// }
// console.log(newArr);
// const tripled = arr.map(number => number * 5);
// // console.log(tripled);

// const friends = ['fahim', 'tomal', 'sadi', 'padi'];
// const name = friends.map(name => `Hello, ${name}, how are you?`)
// console.log(name)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let filtered = []
// for (let number of array) {
//     if (number % 2 == 0) {
//         filtered.push(number);
//     }
// }
// console.log(filtered)
// const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '017566654654', address: 'Chandpur', dress: 'silver' }
// const phone = fish.phone
// const price = fish.price
// const dress = fish.dress
// const id = fish.id

// const { phone, price, dress, id } = fish
// console.log(phone, price)
// console.log(dress, price)
// console.log(phone, price)
// console.log(dress, price)
// console.log(phone, price, id)
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'fahim', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        // tech: {
        //     first: 'html',
        //     second: 'css',
        //     third: 'Js'
        // }

    }
}
// const work = company.web.work
// const framework = company.web.framework

// const { name } = company;
// const { name, food } = company.ceo
// const { work, framework } = company.web
// const { first, second, third } = company.web.tech
// console.log(first, second, third)
const { web: { tech: { first: x, second: y, third: z } = {} } } = company
// console.log(id)
// console.log(x, y, z)
const obj = {
    name: 'Fahim',
    // features: {
    //     hair: 'black',
    //     eye: 'black',
    //     height: 'tall',
    //     age: 24
    // }
}

const { features: { hair: chul, age: boyosh } = {} } = obj
// console.log(obj.features?.hair)
// console.log(chul, boyosh)

// const myObj = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const [, q] = [40, 25]
// console.log(q)
// const numbers = [1, 2, [3, 4, 5], 6, 7]
// const [, , [, , a], b] = numbers
// console.log(a, b)

// let e = 1;
// let f = 2;
// [f, e] = [e, f]
// console.log(f, e)
// 1. loop 
// 2. called function 
// 3. pushed into an array
const arr = [2, 4, 6, 8, 10]
// const output = [];
// const doubleit = number => number * 2
// for (const number of arr) {
//     const result = doubleit(number)
//     output.push(result);
// }
// // console.log(output)

// const double = num => num * 2
// const output2 = arr.map(num => {
//     if (num % 2 == 0) {
//         return num;
//     }
// });
// console.log(output2)



const names = ['fahim', 'tomal', 'shahin', 'shaker', 'sadi']
// const newNames = names.map(name => name.toUpperCase())
// console.log(newNames);
const nLength = names.map(name => name.length)
// console.log(nLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 300, color: 'white' },
    { name: 'sticky note', price: 10, color: 'pink' },
    { name: 'water glass', price: 20, color: 'blue' }
]
const name = products.map(name => name.name)
const price = products.map(price => price.price * 3)
// console.log(name)
// console.log(price)
products.map(product => console.log(product.price))

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const maxNum = array.filter(num => num > 20);
const maxprice = products.filter(num => num.price > 20);
const color = products.filter(num => num.color == 'black');
console.log(color);


