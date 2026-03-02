const { boatInventory } = require("./fishingBoat.js")


//boatOfferings calls boat inventory to get a list of fish and creates an empty array

//mongerPurchases will store what the monger decides to buy

//chefPurchases will store 

//*** mongerInventory function */
//Outer Loop (for (fish of boatOfferings)): It loops through every fish object inside an array called boatOfferings.
//Filtering (if): It checks two conditions for each fish:
//The price must be $7.50 or less.
//The available amount must be at least 10.
//Selection (mongerPurchases.push): If the fish meets both conditions, the entire fish object is added to the mongerPurchases array.
//Quantity Reset (Inner Loop): Once a fish is added, the code immediately runs another loop over the entire mongerPurchases list and sets every fish's amount property to exactly 10.

//*** chefConstraints function*/
//const chefConstraints = (budget) => {: Defines an arrow function that accepts a single numerical parameter called budget.
//for (fish of mongerPurchases){: Loops through every item in an external array called mongerPurchases. Each item is temporarily referred to as fish.
//if(fish.price <= budget) {: A conditional check. If the current fish's price is less than or equal to the chef's budget, the code inside the curly braces runs.
//chefPurchases.push(fish): Adds the current fish object to the chefPurchases array.
//for (boughtFish of chefPurchases) { boughtFish.amount = fish.price * .5 }: This is a nested loop. Every time a new fish is bought, it looks at every fish already in the chefPurchases list and sets their amount property to 50% of the current fish's price.
//fish.price -= fish.price * .5: This reduces the price of the current fish by 50% (effectively price = price * 0.5).
//return chefPurchases: After checking all fish, the function returns the final list of items the chef "purchased".



const boatOfferings = boatInventory() 
const mongerPurchases = []
const chefPurchases = []

const mongerInventory = () => {

    for (fish of boatOfferings){
        if (fish.price <= 7.50 && fish.amount >= 10) {
            mongerPurchases.push(fish) 
             for (boughtFish of mongerPurchases) {
                boughtFish.amount = 10
             }  
             }
}
}
mongerInventory ()

const chefConstraints = (budget) => {
    for (fish of mongerPurchases){
        if(fish.price <= budget) {
            chefPurchases.push(fish) 
            for (boughtFish of chefPurchases) {
                boughtFish.amount = fish.price * .5
             }
             fish.price -= fish.price * .5 
        }
    }

  return chefPurchases  
}

module.exports = {mongerInventory, chefConstraints}