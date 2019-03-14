// snippet
// ES6 style
class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
}

class Book extends Product
{
    constructor(name, price, author)
    {
        super(name, price);
        this.author = author;
    }
}

class Basket
{
    constructor()
    {
        this.products = [];
    }

    add_product(amount, product)
    {
        this.products.push(...Array(amount).fill(product));
    }

    calc_total()
    {
        return this.products
            .map(product => product.price)
            .reduce( (a, b) => a + b, 0)
    }

    print_shopping_info()
    {
        console.log('Total price: ' + this.calc_total());
    }
}

const bread = new Product('bread', 1);
const water = new Product('water', 0.25);
const faust = new Book('faust', 12.5, 'Goethe');

const basket = new Basket();

basket.add_product(3, bread);
basket.add_product(1, water);
basket.add_product(1, faust);

basket.print_shopping_info();



//
// // prototype style
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// function Book(name, price, author) {
//     Product.call(this, name, price);
//     this.author = author;
// }
//
// Book.prototype = Object.create(Product.prototype);
// Book.prototype.constructor = Book;
//
// function Basket() {
//     this.products = [];
// }
//
// Basket.prototype.add_product = function(amount, product){
//     this.products.push(...Array(amount).fill(product));
// };
// Basket.prototype.calc_total = function(){
//     return this.products
//         .map(product => product.price)
//         .reduce( (a, b) => a + b, 0 );
// };
// Basket.prototype.print_shopping_info = function(){
//     console.log('Total price: ' + this.calc_total());
// };
//
// const bread = new Product('bread', 1);
// const water = new Product('water', 0.25);
// const faust = new Book('faust', 12.5, 'Goethe');
//
// const basket = new Basket();
//
// basket.add_product(3, bread);
// basket.add_product(1, water);
// basket.add_product(1, faust);
//
// basket.print_shopping_info();
