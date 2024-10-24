# Shopping Cart Implementation

This project is a simple shopping cart application implemented using JavaScript. It allows users to manage products in their cart by adding, increasing, decreasing quantities, and removing items. The total number of items and their total price are dynamically updated as actions are performed.

## Features

- Add products to the shopping cart.
- Increase or decrease the quantity of a specific product.
- Remove products from the cart.
- Display total number of items in the cart.
- Display total price of all items in the cart.

## Getting Started

````markdown
To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```
````

2. **Navigate into the project directory**:

   ```bash
   cd <project-directory>
   ```

3. **Open the HTML file in your web browser**:
   - Ensure that the HTML file is properly linked to the JavaScript.

## Code Structure

### HTML Elements

The code targets specific HTML elements using their IDs, which are assumed to be present in your HTML:

- `total-cart-items`: Element to display the total number of items in the cart.
- `display-cart-items`: Element to display the list of products in the cart.
- `total-price`: Element to display the total price of products in the cart.

### Classes

- **Product Class**

  - Represents a product with an `id`, `name`, and `price`.

  ```javascript
  class Product {
    constructor(id, name, price) { ... }
  }
  ```

- **ProductInfo Class**

  - Inherits from `Product` and adds a `quantity` property.
  - Includes a method to calculate the total price for the product based on its quantity.

  ```javascript
  class ProductInfo extends Product {
    constructor(id, name, price, quantity) { ... }
    calculateProductTotal() { ... }
  }
  ```

- **ShoppingCartItems Class**

  - Manages an array of `ProductInfo` instances (cart items).
  - Contains methods to:
    - Get the number of items in the cart.
    - Calculate and display the total price of the cart.
    - Increase or decrease the quantity of a product.
    - Remove a product from the cart.
    - Display all cart items.

  ```javascript
  class ShoppingCartItems {
    constructor(cartItems) { ... }
    getNumberOfItemsInCart() { ... }
    getTotalPriceOfCart() { ... }
    increaseQuantity(productId) { ... }
    decreaseQuantity(productId) { ... }
    removeCartItem(productId) { ... }
    displayCartItem() { ... }
  }
  ```

## Sample Data

A sample cart containing several products is initialized in the code:

```javascript
let cartItems = [
  new ProductInfo(1, "Iphone 6", 10000, 1),
  new ProductInfo(2, "Samsung", 50000, 1),
  new ProductInfo(3, "Infinix", 30000, 1),
  new ProductInfo(4, "Pixel 5A", 40000, 1),
];
```

## Usage

Upon loading the application, the cart items will be displayed. You can perform the following actions:

- Click the '+' button to increase the quantity of an item.
- Click the '-' button to decrease the quantity of an item.
- Click the 'Remove' button to remove the item from the cart.

The total number of items in the cart and the total price will update accordingly.

## Contributing

Contributions are welcome! If you'd like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Notes:

```
- Remember to replace `<repository-url>` and `<project-directory>` with the actual URL of your repository and the directory name where your project resides.
- This `README.md` is a general template and can be modified to better suit your project's specific requirements or additional features you may want to include.
```
