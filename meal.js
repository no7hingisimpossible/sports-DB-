const searchFood = () => {
    // const searchField = document.getElementById('search-field')
    // const searchText = searchField.value;
    // // console.log(searchText);
    // searchField.value = '';
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    // // console.log(url)
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displaySearchResult(data.meals))
    console.log('clicked')
}

const displaySearchResult = meals => {
    const searchSection = document.getElementById('search-section')
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
            <div onclick="searchFoodById(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>`
        searchSection.appendChild(div)
    })
}

const searchFoodById = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        .then(res => res.json())
        .then(data => console.log(data))
}