const loadAPI = () => {
    // console.log('clicked')
    document.getElementById('main-div').innerHTML = '';
    // document.getElementById('spinner').style.display = 'block'
    const input = document.getElementById('search-field')
    const search = input.value
    // console.log(search)
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayers(data.player))
    // document.getElementById('spinner').style.display = 'none'

}

const showPlayers = infos => {
    // console.log(infos)
    // if (infos) {
    //     document.getElementById('spinner').style.display = 'none'

    // }
    // else {
    //     document.getElementById('spinner').style.display = 'block'

    // }
    const mainDiv = document.getElementById('main-div')
    for (const info of infos) {
        console.log(info)
        const div = document.createElement('div')

        div.innerHTML = `
        <img class="w-25" src="${info.strFanart1}" class="" alt="">
        <h4>${info.strPlayer}</h4>
        <h5>${info.idPlayer}</h5>
        <h6>${info.strNationality}</h6>
        <button onclick="loadDetails('${info.idPlayer}')" id="details-btn" class="btn btn-success">Details</button>
        `
        mainDiv.appendChild(div)
    }
}
const loadDetails = details => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${details}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.players[0]))
}

const showDetails = id => {
    // console.log(id.strPlayer)
    const detailsDiv = document.getElementById('details-div').innerHTML = `
    <h1>${id.strPlayer}</h1>
    `
}