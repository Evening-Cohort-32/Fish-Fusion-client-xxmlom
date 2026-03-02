const {chefConstraints } = require("./fishMonger.js")

// *** function fishMenu ***

// 1.The Input (dailyBudget)
//The function fishMenu takes one argument: a budget. It passes this budget to a helper function, chefConstraints(dailyBudget), which presumably filters a database of fish to return an array of fish objects the chef can afford. 

//2. Initializing the HTML
//It starts an array called html with the opening tags for the page: 
//An <h1> header titled "menu".
//An opening <article> tag with a class of "menu". 

//3. The "Loop" (.map)
//This is the core logic. For every fish object in the chefPurchases array, it creates a template string containing:
//A Heading: The name of the fish species (e.g., <h2>Salmon</h2>).
//Three Dishes: It automatically generates a Soup, a Sandwich, and a Grilled option for that specific species using string concatenation.
//.join(''): Since .map() returns an array, .join('') squashes all those fish entries into one long string so they can be pushed into the main HTML array. 

//4. Final Assembly
//Closing: It pushes the closing </article> tag to the array.
//Joining: const joinedHtml = html.join('') takes all the separate parts (the header, the list of fish, and the footer) and merges them into one single block of HTML text.
//Return: It returns that final string to be rendered on a webpage.

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
        '\n' ).join('') )

    html.push ('</article>')
    
const joinedHtml = html.join('');

return joinedHtml

}





module.exports = {fishMenu}