

const searchFood = () => {
    const searchInput = document.getElementById('food').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}


const displayFood = foods => {
    const foodNames = document.getElementById('food-body');

    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'container food-status'
        foodDiv.innerHTML = `
        <img onclick="moreInfo()" id="icon" src="${food.strMealThumb}" alt="">
        <h1 id="food-name">${food.strMeal}</h1>
        
        `
            ;
        foodNames.appendChild(foodDiv);
    })
}

