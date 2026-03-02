const {fishMenu} = require("./restaurant.js")

/*
  Do not comment out this code. 
  
  Your job is to make this small algorithm work by
  writing supporting functionality in the other 
  modules
*/

// const dailyPriceLimit = 3.99
//This creates a constant variable named dailyPriceLimit and assigns it a numeric value of 3.99. This represents the maximum price a user is willing to pay for a meal.

//const menu = fishMenu(dailyPriceLimit)
//This line calls a function named fishMenu and passes the dailyPriceLimit as an argument.
//The function is expected to return a value ( an array or string containing fish dishes that cost $3.99 or less), which is then stored in the new constant variable menu.

//console.log(menu)
//This prints the contents of the menu variable to the web console so you can see the final list of available dishes.

const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(menu)
