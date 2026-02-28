const {chefConstraints } = require("./fishMonger.js")


//Specify the amount to spend per fish
//price will be passed as an argument to fishMenu
//IF the fish are LESS than the price the chef buys 50% of the inventory
//Define a HTML menu that creates 3 different meals per 
//fish  a soup, a grilled dinner, and sandwich. 
 let chefPurchases = []


const fishMenu = (dailyBudget) => {
    chefPurchases = chefConstraints(dailyBudget)
    let html = ['<h1>menu</h1>' + '\n' +
    '<article class="menu">'+ '\n']



    html.push (
        chefPurchases.map (fish => '\t' + '<h2>' + fish.species + '</h2>' + '\n' +
        '\t' +'<section class="menu__item">'+ fish.species + ' Soup</section>'+ '\n' +
        '\t' +'<section class="menu__item">'+ fish.species + ' Sandwich</section>'+ '\n' +
        '\t' +'<section class="menu__item">Grilled '+ fish.species + ' </section>'+ '\n' +
        '</article>'+ '\n' ).join('') )

const joinedHtml = html.join('');

return joinedHtml

}





module.exports = {fishMenu}