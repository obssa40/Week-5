
// Class: Menu
// Description: This class will create
// a menu for the user to interact with.

class Menu {
  constructor() {
    this.menuItems = [];
  }

  // Method: addMenuItem
  // Description: This method will add a menu item to the menuItems array.
  addMenuItem(item) {
    this.menuItems.push(item);
  }

  // Method: displayMenu
  // Description: This method will display the menu to the user.
  displayMenu() {
    let menu = "";
    for (let i = 0; i < this.menuItems.length; i++) {
      menu +=
        this.menuItems[i].name +
        " - " +
        this.menuItems[i].description +
        " - $" +
        this.menuItems[i].price +
        " - " +
        this.menuItems[i].calories +
        " calories \r ";
    }
    return menu;
  }
}

// Class: MenuItem

class MenuItem {
  constructor(name, description, price, calories) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.calories = calories;
  }
}

// Create a new menu
let menu = new Menu();

// Add menu items to the menu
menu.addMenuItem(
  new MenuItem(
    "Cheeseburger",
    "A cheeseburger with lettuce, tomato, and pickles.",
    5.99,
    600
  )
);
menu.addMenuItem(new MenuItem("Fries", "A small order of fries.", 2.99, 400));
menu.addMenuItem(new MenuItem("Soda", "A 20oz soda.", 1.99, 200));

//create a list of menu
let menuList = menu.displayMenu();

//ask the user what they want to do
let userChoice = prompt(
  "What would you like to do? \r 1. View Menu \r 2. Add Menu Item \r 3. Delete Menu Item \r 4. Exit"
);

//CREATE A LOOP TO KEEP ASKING THE USER WHAT THEY WANT TO DO
while (userChoice != 4) {
    //if the user wants to view the menu
    if (userChoice == 1) {
        alert(menuList);
    }
    //if the user wants to add a menu item
    else if (userChoice == 2) {
        let itemName = prompt("What is the name of the item?");
        let itemDescription = prompt("What is the description of the item?");
        let itemPrice = prompt("What is the price of the item?");
        let itemCalories = prompt("How many calories are in the item?");
        menu.addMenuItem(new MenuItem(itemName, itemDescription, itemPrice, itemCalories));
        menuList = menu.displayMenu();
    }
    //if the user wants to delete a menu item
    else if (userChoice == 3) {
        let itemToDelete = prompt("What is the name of the item you want to delete?");
        for (let i = 0; i < menu.menuItems.length; i++) {
            if (menu.menuItems[i].name == itemToDelete) {
                menu.menuItems.splice(i, 1);
            }
        }
        menuList = menu.displayMenu();
    }
    //ask the user what they want to do
    userChoice = prompt(
        "What would you like to do? \r 1. View Menu \r 2. Add Menu Item \r 3. Delete Menu Item \r 4. Exit"
    );


}

