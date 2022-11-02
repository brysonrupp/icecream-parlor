const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}]


function buyIceCream(iceCreamName) {
    let foundIceCream = iceCream.find(i => i.name == iceCreamName)
    foundIceCream.quantity++
    // console.log(foundIceCream);
    drawCart()
}

function buyVessels(vesselName) {
    let foundVessel = vessels.find(v => v.name == vesselName)
    foundVessel.quantity++
    // console.log(foundIceCream);
    drawCart()
}


// function buyCookieDough() {
//     let flavor = iceCream.find(f => iceCream.name == "cookie dough")
//     flavor.quantity++
// }

function drawCart() {
    let template = ''
    // console.log("icecream", iceCream)
    iceCream.forEach(i => {
        if (i.quantity > 0) {
            template += `
            
            <div class="col-12 col-md-5 bg-light round-border">
            <p>${i.name}</p>
         <h6 class="offset-1">Price: ${i.price}</h6>
         <h6 class="offset-1">Quantity: ${i.quantity}</h6>
        </div>`


        }
    })
    vessels.forEach(v => {
        if (v.quantity > 0) {

            template += `
            
            <div class="col-12 col-md-5 bg-light round-border">
            <p>${v.name}</p>
            <h6 class="offset-1">Price: ${v.price}</h6>
            <h6 class="offset-1">Quantity: ${v.quantity}</h6>
            </div>`
        }
    })

    document.getElementById('cart').innerHTML = template
    drawTotal()
}

// function drawCart() {
//     let template = ''
//     vessel.forEach(i => {
//         if (v.quantity > 0) {
//             template += `<div class="col-12 col-md-5 bg-light round-border">
//             <p>${v.name}</p>
//          <h6 class="offset-1">Price: ${v.price}</h6>
//          <h6 class="offset-1">Quantity: ${v.quantity}</h6>
//         </div>`
//         }
//         document.getElementById('vessel').innerHTML = template
//         drawTotal()
//     }

//     )
// }
function drawTotal() {
    let total = 0
    iceCream.forEach(i => [
        total += i.price * i.quantity
    ])
    document.getElementById('total').innerText = total.toFixed(2)
}

// function checkout() {
//     iceCream.forEach(i => {


//         if (window.confirm('are you sure you want to clear'))
//             i.quantity = 0
//     }
//     )
//     drawCart()
// }

// function removeItem(flavorName) {
//     let foundIceCream = iceCream.find(i => i.name == iceCreamName)
//     foundIceCream.quantity--
//     drawCart()
// }


// function buyVessels() {

// }
