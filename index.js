// TARGET HTML ELEMENTS USING THEIR ID
const TOTAL_CART_ITEMS = document.getElementById("total-cart-items");
const DISPLAY_CART_ITEMS = document.getElementById("display-cart-items");
const TOTAL_PRICE = document.getElementById("total-price");

/* Create an object class to store for the Product to store id, name, and price of the product
 */

// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

/* Create an object class for the shopping Cart Item to store the properties for the product and its quantity
 */

// a sub class of the product
class ProductInfo extends Product {
  constructor(id, name, price, quantity) {
    super(id, name, price);
    this.quantity = quantity;
  }
  // A  Method to calculate the total price of the items
  calculateProductTotal() {
    return this.price * this.quantity;
  }
}

/* Create another object class for the shopping cart that contains an array of ShoppingCartItems instances
 */

class ShoppingCartItems {
  constructor(cartItems) {
    this.cartItems = cartItems;
  }

  // A METHOD TO GET THE TOTAL NUMBER OF ITEMS IN A CART
  getNumberOfItemsInCart() {
    TOTAL_CART_ITEMS.innerText = this.cartItems.length;
  }

  // A METHOD TO GET THE TOTAL PRICE OF ALL ITEMS

  getTotalPriceOfCart() {
    let total = 0;
    this.cartItems.forEach((item) => {
      return (total += item.price * item.quantity);
    });
    TOTAL_PRICE.innerText = total;
    this.displayCartItem();
  }

  // A METHOD FOR INCREASING PRODUCT QUANTITY
  increaseQuantity(productId) {
    this.cartItems.forEach((item) => {
      if (item.id === productId) {
        item.quantity += 1;
      }

      this.displayCartItem();
      this.getTotalPriceOfCart();
    });
  }

  // A METHOD FOR DECREASING PRODUCT QUANTITY
  decreaseQuantity(productId) {
    this.cartItems.forEach((item) => {
      if (item.id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }

      this.displayCartItem();
      this.getTotalPriceOfCart();
    });
  }

  // A METHOD TO REMOVE CART ITEMS
  removeCartItem(productId) {
    let newCartItems = this.cartItems.filter((item) => item.id !== productId);

    this.cartItems = newCartItems;

    this.displayCartItem();
    this.getNumberOfItemsInCart();
    this.getTotalPriceOfCart();
  }

  // A METHOD TO DISPLAY ALL THE CART ITEMS
  displayCartItem() {
    let products = this.cartItems.map((item) => {
      return `<div class="product-card flex-col border p-4 mb-2">
          <div class="flex justify-between mb-4">
            <h2 class="font-bold">${item.name}</h2>
            <h3><span class="font-semibold">Price:</span> ${
              item.price
            }</h3>
            <p><span class="font-semibold">Quantity Total:</span> ${item.calculateProductTotal()}</p>
          </div>
          <div class="flex justify-between">     
            <p></p>
            <button id="${
              item.id
            }" class="delete-btn bg-red-300 h-fit p-1 text-white rounded-xl">Remove</button>

            <div class="flex gap-5 items-center">
              <button id="${
                item.id
              }" class="decrease-btn bg-red-500 rounded-md py-1 px-[0.65rem] text-white">
              -
            </button>
            <p>${item.quantity}</p>
            <button id="${
              item.id
            }" class="increase-btn bg-green-500 rounded-md py-1 px-[0.65rem] text-white">
              +
            </button>
            </div>
          </div>
          
          
        </div>`;
    });
    DISPLAY_CART_ITEMS.innerHTML = products.join("");

    // GET ALL THE BUTTONS FOR DECREASING
    const DECREASE_BTN = document.querySelectorAll(".decrease-btn");

    DECREASE_BTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.decreaseQuantity(parseInt(e.target.getAttribute("id")));
      });
    });

    // GET ALL THE BUTTONS FOR INCREASING
    const INCREASE_BTN = document.querySelectorAll(".increase-btn");

    INCREASE_BTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.increaseQuantity(parseInt(e.target.getAttribute("id")));
      });
    });

    // GET ALL THE BUTTONS FOR DELETING
    const DELETE_BTN = document.querySelectorAll(".delete-btn");

    DELETE_BTN.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.removeCartItem(parseInt(e.target.getAttribute("id")));
      });
    });
  }
}

// Our Cart Items

let cartItems = [
  new ProductInfo(1, "Iphone 6", 10000, 1),
  new ProductInfo(2, "Samsung", 50000, 1),
  new ProductInfo(3, "Infinix", 30000, 1),
  new ProductInfo(4, "Pixel 5A", 40000, 1),
];

// Create An instance of the shopping Cart
const ShoppingCart = new ShoppingCartItems(cartItems);

// Display all the cart Items
ShoppingCart.displayCartItem();
ShoppingCart.getNumberOfItemsInCart();
ShoppingCart.getTotalPriceOfCart();
