import { coffeeArray } from "./coffeeData.js"

const orderTitle = document.getElementById('orderTitle')
orderTitle.style.display = "none"


let orderArr = []

// add event listener to the plus icons
document.addEventListener('click', function(e) {
 addItem(e)
// -------------ADD ITEM ---------
    

 //  --------- REMOVE ITEM ----------
 if (e.target.dataset.remove) {
    // extract the index of the clicked item
    const index = e.target.dataset.remove;
    // find the item in the orderArr
    const removedCoffee = orderArr[index];
    // decrease the quantity and update the price for each click on the "Remove" button
    if (removedCoffee.quantity > 1) {
        removedCoffee.quantity--;
        removedCoffee.price -= removedCoffee.price / (removedCoffee.quantity + 1);
    } else {
        // if the quantity is 1, remove the item from the orderArr
        orderArr.splice(index, 1);
    }
    // update the order HTML
    const order = document.getElementById('order');
    order.innerHTML = getOrderHtml();
  }
})

function addItem(e){
    if (e.target.dataset.plus) {
        // extract the id number of the clicked coffee
        const idNumber = e.target.dataset.plus
        // find the corresponding coffee object in the coffeeArray
        const clickedCoffee = coffeeArray.find(coffee => coffee.id === idNumber)
        // extract the name and price of the clicked coffee
        const clickedCoffeeName = clickedCoffee.name
        const clickedCoffeePrice = clickedCoffee.price
        // check if the clicked coffee is already in the orderArr
        const existingCoffee = orderArr.find(coffee => coffee.name === clickedCoffeeName)
        if (existingCoffee) {
            // if it is, increment the quantity and update the price
            existingCoffee.quantity++
            existingCoffee.price  += clickedCoffeePrice
        } else {
            // if it isn't, add a new object to the orderArr
            orderArr.push({
                name: clickedCoffeeName,
                quantity: 1,
                price: clickedCoffeePrice,
                originalPrice: clickedCoffeePrice
            })
        }
        console.log(orderArr)
        
        orderTitle.style.display = "block"
       const order = document.getElementById('order')
       order.innerHTML = getOrderHtml()
    }

}


function getOrderHtml(){
    let orderHtml = ''

    orderArr.forEach((coffee,index) => {
        orderHtml += `
        
        <div class="orderBar">
       <div class="orderText">
            <div class="orderName">${coffee.name} 
            </div>
        <div class="removeButton">
            <button data-remove="${index}">Remove</button>
            </div>
        </div>
        <div class="orderPrice">$${coffee.price}</div>
        </div>
        `
    })
    return orderHtml

}



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
            <p class="coffeePrice">$${coffee.price}</p> 
            </div>
           <div class="plusButton" > <i class="fa-solid fa-circle-plus button" data-plus=${coffee.id} style="color: #8d4002;"></i></div>
           </div>
        </div>
    </div>`
    })
    return feedHtml
}

function render(){
    const feed = document.getElementById('feed')
    feed.innerHTML =  getFeedHtml()
}

render()