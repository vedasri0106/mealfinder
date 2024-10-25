const searchBtn=document.getElementById('search-btn');
const mealList=document.getElementById('meal');

const mealsDetailsContent=document.querySelector('.meal-details-content');
const recipeCloseBtn=document.getElementById("recipe-close-btn");
searchBtn.addEventListener('click',getMealList)

function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `


<div class="container">
    <div class="row">
                <div class="col my-2" data-id = "${meal.idMeal}">
                        <div class="card shadow-lg">
                                <div class="card-body py-4">

                                            <div class = "meal-item  " >
                                                <div class = "meal-img">
                                                    <img src = "${meal.strMealThumb}" alt = "food" class="img-fluid mx-auto d-block">
                                                </div>
                                                <div class = "meal-name text-center">
                                                    <h3>${meal.strMeal}</h3>
                                                        <div class = "meal-food d-flex justify-content-center">
                                                            <button class="btn btn-warning fw-bold">
                                                                <a href = "#" class = "recipe-btn">Get Recipe</a>
                                                             </button>
                                                        </div>
                                                </div>
                                            </div>

                                </div>
                        </div>
                </div>
    </div>
</div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


