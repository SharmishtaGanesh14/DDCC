/*Blueprint-class-never runs, using class we can create multiple objects
predefined objects- lists, tuples
here we are trying to create-userdefined objects

Why do we need class?
-code reusability 
-maintain proper structure */

// backticks similar to print(f"") 
class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getProductDetails() {
        return `${this.name} : ${this.description} : ${this.price}`;
    }
}

class ShoppingCart {
    constructor() {
        this.products = []; //empty list
    }
    addProduct(product) {
        this.products.push(product); //append in python 
    }
    // Higher-order function
    removeProduct(product) {
        this.products = this.products.filter(p => p !== product); //function as a service-optimised code written in other languages, 
        // useful when we want to generate a reports // outputs list // code is neat and clean
    }
    getTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);//output returns one element 
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.cart = new ShoppingCart();
    }
    addToCart(product) {
        this.cart.addProduct(product);
    }
    checkout() {
        const total = this.cart.getTotal();
        this.cart = new ShoppingCart(); // Garbage Collection (GC) will be called -prev obj should be free
        return total;
    }
}

// Creating product instances
let book = new Product('Book1', 'Book1Description', 1000);
let pen = new Product('Parker Pen', 'PenDescription', 100);

// Creating a customer instance
let sharmi = new Customer('Sharmi', 'sharmishtaganesh@gmail.com');

// Adding products to cart
sharmi.addToCart(book);
sharmi.addToCart(pen);

// Checking out and printing the total price
console.log(sharmi.checkout()); // Output: 1100

//code runs in the backend, not in the browser