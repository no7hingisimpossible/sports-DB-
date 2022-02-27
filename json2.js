const load = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => loadUsers(data))
}

const loadUsers = users => {
    const quote = document.getElementById('user')
    quote.innerText = users.quote
}
