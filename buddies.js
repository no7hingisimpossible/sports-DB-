const load = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => display(data.results))
}
load()

const display = (datas) => {

    const div = document.getElementById('user')
    for (const data of datas) {
        const p = document.createElement('p')
        p.innerText = `Name: ${data.name.first} ${data.name.last} Email: ${data.email} `
        div.appendChild(p)
    }
}