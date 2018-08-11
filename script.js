//create object constructor 
function foodItem (name, dept, price, salePrice, onSale){
    this.name = name; 
    this.dept = dept; 
    this.price = price;
    this.salePrice = salePrice;
    this.onSale = onSale; 
}


//create objects
//Objects for Fruit class
var appleItem = new foodItem("apple", "fruit", 1.25, 1.00, false);

var bananaItem = new foodItem("banana", "fruit", .79,.59, false) ;

var orangeItem = new foodItem("orange","fruit", 1.85, 1.50,true);

var blueberryItem = new foodItem("blueberry","fruit", 2.99, 2.50,true);

var grapeItem = new foodItem("grapes","fruit", 4.99, 4.50,true);

var pearItem = new foodItem("pear","fruit", 1.99, 1.50,false);

//Objects for Veggie class

var pepperItem = new foodItem("pepper", "veggie", .89, .79, false);

var carrotItem = new foodItem("pepper", "veggie", 3.99, 2.99, false);

var yellowSquashItem = new foodItem("yellowsquash", "veggie", 2.49, 2.19, true);

var eggplantItem = new foodItem("eggplant", "veggie", 2.99, 2.49, false);

var lettuceItem = new foodItem("lettuce", "veggie", 1.99, 1.79, false);

var potatoItem = new foodItem("potato", "veggie", 3.99, 3.49, false);

//Objects for Dairy class
var milkItem = new foodItem("milk", "dairy", 3.99, 3.49, false);

var garlicItem = new foodItem("garlic", "dairy", 1.99, 1.49, false);

var butterItem = new foodItem("butter", "dairy", 4.99, 3.49, true);

var breadItem = new foodItem("bread", "dairy", 3.99,3.59,false);

var cheeseItem = new foodItem("cheese", "dairy", 4.99,4.59,false);

var eggsItem = new foodItem("eggs", "dairy", 4.99,4.59,false);

//object methods


//use 3 arrays to hold objects for each category 
//insert object into css grid

var fruitArray = [appleItem, bananaItem, orangeItem, blueberryItem, grapeItem, pearItem];

var veggieArray = [pepperItem, carrotItem, yellowSquashItem,   
eggplantItem,lettuceItem, potatoItem];

var dairyArray = [milkItem,garlicItem,butterItem,breadItem,cheeseItem,eggsItem];

var cart = [];


//store each item into shopping cart
function addToCart(item){
    cart.push(item) 
    console.log(cart)
}

var allItems = []
// Expands array into arguments to push(destructure)
// [0, 1] -> 0, 1
allItems.push(...fruitArray)
allItems.push(...veggieArray)
allItems.push(...dairyArray)

for (let i=0; i<allItems.length; i++){
    var itemEle = document.querySelector('img.' + allItems[i].name)

    // console.log(allItems[i].name + " " + itemEle)
    itemEle.addEventListener('click',function(){
        addToCart(allItems[i])
    })
}




// console.log(appleItem)
// console.log(addToCart(apple))