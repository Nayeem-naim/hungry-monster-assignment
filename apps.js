
const getFoodData = food => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => foodName(data.meals));
}

    const foodName = foods => {
        for (let i = 0; i < foods; i++) {
            const element = food[i];
            // console.log(element.meals);
            document.getElementById('food-name').innerText = element.meals;
        }
    }

    const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const inputFood = document.getElementById('food').value;
    getFoodData(inputFood)
})

const updateData = dataItem => {
    document.getElementById('icon').innerText = dataItem.strMealThumb
    document.getElementById('food-name').innerText = dataItem.meals || "Unknown  Food Name"; 
    document.getElementById('foods-info').innerText = dataItem.strCategory;

};