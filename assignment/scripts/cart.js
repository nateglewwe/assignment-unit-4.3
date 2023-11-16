console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['dog', 'cat'];
const maxItems = 5

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    else {
        return true;
    }
}
console.log(basket);
function addItem(item) {
    let isTheBasketFull = isFull()
    if (isTheBasketFull === false) {
        basket.push(item);
        return true;
    } 
    else {
        return false;
    }

    
}

function listItems(basketList) {
    let counter = 0
    while (counter < basketList.length) {
        console.log(basketList[counter]);
        counter++
    }
}

function empty() {
    //  basketList2 = []
    //  return basketList2
    //console.log(basket);
   basket = []
}

function removeItem(item) {
    let isFound = Array.indexOf(item)
    if (isFound >= 0) {
        return item;
    }
    else {
        return null
    }
}
// console.log(addItem('dog'));
// console.log(basket);
//listItems(basket)
//empty()
//console.log(addItem('item'))
//console.log(basket);
console.log(removeItem('camel'))
console.log(removeItem('cat'))





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
