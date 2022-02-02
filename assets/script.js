function updateGbQuantity(displayQuantity) {
    let gbQty = document.querySelector('#qty-gb')
    gbQty.innerHTML = displayQuantity 
}

function updateCcQuantity(displayQuantity) {
    let ccQty = document.querySelector('#qty-cc')
    ccQty.innerHTML = displayQuantity 
}

function updateSugarQuantity(displayQuantity) {
    let sugarQty = document.querySelector('#qty-sugar')
    sugarQty.innerHTML = displayQuantity 
}

function updateQuantity(displayQuantity) {
    let qty = document.querySelector('#qty-total')
    qty.innerHTML = displayQuantity
}

// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Brenton Ring" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let qty = 0 // Total Quantity

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Gingerbread

gbPlusBtn.addEventListener('click', function() {
    gb++
    qty++
    updateGbQuantity(`${gb}`)
    updateQuantity(`${qty}`)
})

gbMinusBtn.addEventListener('click', function() {
   // if (gb > 0) {}
    gb--
    qty--
    updateGbQuantity(`${gb}`)
    updateQuantity(`${qty}`)
})

// Chocolate Chip

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

ccPlusBtn.addEventListener('click', function() {
    cc++
    qty++
    updateCcQuantity(`${cc}`)
    updateQuantity(`${qty}`)
})

ccMinusBtn.addEventListener('click', function() {
    cc--
    qty--
    updateCcQuantity(`${cc}`)
    updateQuantity(`${qty}`)
})

// Sugar Sprinkles

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    qty++
    updateSugarQuantity(`${sugar}`)
    updateQuantity(`${qty}`)
})

sugarMinusBtn.addEventListener('click', function() {
    sugar--
    qty--
    updateSugarQuantity(`${sugar}`)
    updateQuantity(`${qty}`)
})