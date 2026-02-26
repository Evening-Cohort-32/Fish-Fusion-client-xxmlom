const { boatInventory } = require("./fishingBoat.js")


//boatOfferings calls boat inventory to get a list of fish and creates an empty array

//mongerPurchases will store what the monger decides to buy

//mongerInventory function loops through every fish from the boatOfferings and selects a fish if
//1.The price is 7.50 or less
//2.The amount available is at least 10
// IF the fish meets those criteria its added to the mongerPurchases array
// each time a new fish is added it loops through mongerPurchases and resets the amount of fish to 10






const boatOfferings = boatInventory() 
const mongerPurchases = []

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



module.exports = {mongerInventory}