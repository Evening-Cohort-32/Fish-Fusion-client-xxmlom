import { mongerInventory } from "./fishMonger.js"

export const fishMenu = (maxPrice) => {
  //Step 1: Chef's fish purchases
}
  const chefFish = mongerInventory(maxPrice)

//Step 2: Build HTML String Menu
let html = "<h1>Menu</h1>"
for (const fish of chefFish) {
  html += `  
  <article class="menu">
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
</article>`
}

return html