// 36-4 Loop through an object using for in, for of, object entries
const bottle = { color: 'olive', hold: 'water', price: 50 }

for (const property in bottle) {
    // console.log(property, bottle[property]);
}

const keys = Object.keys(bottle)
for (const key of keys) {
    console.log(key, bottle[key])
}