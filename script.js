//alert('hello wordl');
/* 
let color_buttons = document.querySelectorAll(".color");
for (let i = 0; i < color_buttons.length; i++) {
    color_buttons[i].addEventListener("click", changeColor);
}
*/

// add event listeners to +/- bttons
let inventoryBtn = document.querySelectorAll(".plus-btn");
for( let i = 0; i < inventoryBtn.length; i++){
    inventoryBtn[i].addEventListener("click", plusMinus);
}
document.getElementById("clear").addEventListener("click", clearAll);
document.getElementById("order").addEventListener("click", orderItems);


let subtotal = 0;
const priceMap = {'turmeric-latte':7, 'burrito':8, 'recovery':10, 'originator':6};
let countMap = {'turmeric-latte':0, 'burrito':0, 'recovery':0, 'originator':0};
const keyStrings = {'turmeric-latte':"Turmeric Latte", 'burrito':"Burrito", 'recovery':"Recovery Punch", 'originator':"The Originator"};





/** 
 * calls the increment/decrement method for each item
 */
function plusMinus(){
    let pressed = this.id;
    if(pressed === 'turm-sub'){
        subItem('turmeric-latte');
    } else if (pressed === 'turm-add'){
        addItem('turmeric-latte');          
    } else if (pressed === "burrito-sub" ){
        subItem('burrito');
    } else if( pressed === "burrito-add") {
        addItem('burrito');
    } else if (pressed === "originator-sub"){
        subItem('originator');
    }else if (pressed === "originator-add") {
        addItem('originator');
    } else if (pressed === "recovery-sub"){
        subItem('recovery');
    }else if (pressed === "recovery-add") {
        addItem('recovery');
    } else {
        alert('an error has occurred');
    }
}

/** 
 * correctly increments the value with id:item 
 */
function addItem(item){
    let e = document.getElementById(item);
    countMap[item] += 1;
    e.innerHTML = countMap[item];
    updateSubtotal(item, 1);
}

/**
 * Correctly decrements the value with id:item 
 */
function subItem(item){
    let e = document.getElementById(item);
    if(countMap[item] > 0){
        e.innerHTML = --countMap[item];
        updateSubtotal(item, -1);
    }
}

/**
 * adds/subtracts the price of item from the subtotal
 */
function updateSubtotal(item, sign){
    let price = priceMap[item];
    subtotal += price * sign;
    document.getElementById('subtotal').innerHTML = 'Subtotal $' + subtotal;
}

/**
 * subtotal and all element counts should be set to 0
 */
function clearAll(){
    //reset subtotal
    subtotal = 0;
    document.getElementById('subtotal').innerHTML = 'Subtotal $' + subtotal;

    //reset element counts
    for(let key in countMap){
        countMap[key] = 0;
        document.getElementById(key).innerHTML = 0;
    }
}

/**
 * 
 */
function orderItems(){
    let result = ""
    let ct = 0;
    for(let key in countMap){
        if(countMap[key] !== 0) {
            ct++;
            result += " " + countMap[key] + " " + keyStrings[key];
        }
    }
    if(ct > 0)
        alert('Order Placed!\n' + result);
    else 
        alert("No items in cart!");
}
