import { coffeeArray } from "./coffeeData.js"

function getFeedHtml(){
    let feedHtml = ''

    coffeeArray.forEach(function(coffee){
        feedHtml += `
    <div class="coffee">
        <div class="details">
            <div class="emojiPic">
                <img src=${coffee.emoji} class="orderImg">
            </div>
            <div class="coffeeDetails">
            <p class="coffeeName">${coffee.name}</p> 
            <p class="coffeeIngredient">${coffee.ingredients}</p> 
            <p class="coffeePrice">${coffee.price}</p> 
            </div>
           <div class="plusButton"> +</div>
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