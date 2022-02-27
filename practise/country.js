const loadApi = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadApi();

const displayCountry = countries => {
    const displayDiv = document.getElementById('display')
    for (const country of countries) {
        console.log(country)
        const div = document.createElement('div')
        div.className = "class"
        div.innerHTML = `
        <h3 style="color:red;">${country.name.common}</h3>
        <p>${country.name.official}</p>
        <button onClick="loadDetails('${country.name.common}')">Details</button>
        `
        displayDiv.appendChild(div)

    }
}
const loadDetails = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
}
const displayDetails = details => {
    console.log(details)
    const detailsDiv = document.getElementById('sub-display')
    for (const detail of details) {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>Capital ${detail.capital}</p>
        <img src="${detail.flags.png}">
        `
        detailsDiv.appendChild(div)
    }
}