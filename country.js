const load = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => display(data))
}
load()

const display = countries => {
    const Maindiv = document.getElementById('div')

    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('class')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadNames('${country.name.common}')">Details</button>`
        Maindiv.appendChild(div)
    });
}
const loadNames = name => {
    console.log(name)
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = country => {
    console.log(country)
    const section = document.getElementById('sec')
    section.innerHTML = `
    <h3>Population: ${country.population}</h3>
    <img src="${country.flags.png}">
    `
}