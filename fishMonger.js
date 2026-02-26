const { boatInventory } = require("./fishingBoat.js")
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