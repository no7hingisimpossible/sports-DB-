function user() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => loadUser(data))



}
function loadUser(data) {
    const ul = document.getElementById('user')
    for (const user of data) {

        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

function post() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => loadPost(data))
}
function loadPost(data) {
    const body = document.getElementById('user')
    for (const element of data) {
        const image = document.createElement('div')

        image.innerHTML = `
        <img src="${element.url}">
        
        `
        body.appendChild(image)

        console.log(element.url)
    }
}