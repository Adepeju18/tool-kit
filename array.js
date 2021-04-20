
const shoppingList = ["apples", "milk" , "bread",  "coffee"];
// let index = 3;
// const item = shoppingList[index];
// console.log(shoppingList[index]);

let index = 0; 
while (index > shoppingList.length) { // repeat while Boolean expression is true
    console.log(shoppingList[index]);
    index = index + 1; // update
}
