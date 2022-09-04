
const searchMeal = () =>{
    const searchText = document.getElementById("search-text");
    loadMeal(searchText.value);
    searchText.value = "";
}

const loadMeal = (search) =>{
    const mealURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(mealURL)
        .then(res => res.json())
        .then(data => dispalyMeal(data.meals));
}

const dispalyMeal = (meals) => {
   const displayMeals = document.getElementById("display-meala");
   displayMeals.innerText = ""
    meals.forEach(meal =>{
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");
        colDiv.innerHTML = `

        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                <button onclick = "viewDetails('${meal.idMeal}');">View Details</button>
            </div>
        </div>`;   
        displayMeals.appendChild(colDiv)     
    })
}

const viewDetails = (mealID) =>{
    // console.log(mealID)
    const idURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    
    fetch(idURL)
        .then(res => res.json())
        .then (data => displayViewDetails(data.meals[0])) // idMeal
}

const displayViewDetails = (getMeal) =>{
    console.log(getMeal)
    const displayModal = document.getElementById("display-modal");
    displayModal.innerText =""; 
    const cardDiv = document.createElement("div");
    cardDiv.classList.add ("card")
    cardDiv.innerHTML = `
        <img src="${getMeal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${getMeal.strMeal}</h5>
            <p class="card-text">${getMeal.strInstructions}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;

    displayModal.appendChild(cardDiv)
}


loadMeal(" ")