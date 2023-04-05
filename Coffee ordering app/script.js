import { coffeeArray } from "./coffeeData.js"



document.addEventListener('click',function(e){
    let orderArr = ''
    console.log(e.target.dataset.plus)
})


function getFeedHtml(){
    let feedHtml = ''

    coffeeArray.forEach(function(coffee){
        feedHtml += `
    <div class="coffee">
        <div class="details">
            <div class="emojiPic">
                <img src=${coffee.emoji} class="orderImg">
            </div>
            <div class="coffeePlusDetails">
            <div class="coffeeDetails">
            <p class="coffeeName">${coffee.name}</p> 
            <p class="coffeeIngredient">${coffee.ingredients}</p> 
            <p class="coffeePrice">${coffee.price}</p> 
            </div>
           <div class="plusButton"> <i class="fa-solid fa-circle-plus button" data-plus=${coffee.id} style="color: #8d4002;"></i></div>
           </div>
        </div>
    </div>`
    })
    return feedHtml
}

function render(){
    const feed = document.getElementById('feed')
    feed.innerHTML = getFeedHtml()
}

render()