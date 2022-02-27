
const loadApi = () => {
    const input = document.getElementById('search-field')
    const inputField = input.value
    input.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.meals))

}


const displayResult = meals => {

    const mainDiv = document.getElementById('search-result')

    for (const meal of meals) {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
    
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 onclick="loadMealDetails(${meal.idMeal})" class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        
    `
        mainDiv.appendChild(div)
    }
}
const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals))
}
const displayMealDetails = mealDetails => {
    const div = document.getElementById('div')
    for (const detail of mealDetails) {
        const div2 = document.createElement('div')
        div2.classList.add('card')
        div2.innerHTML = `
        <div class="card">
            <img width="200px" height="100px" src="${detail.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${detail.idMeal}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        div.appendChild(div2)

    }
}