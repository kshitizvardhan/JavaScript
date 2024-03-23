/* The filter() method creates a new array with all elements that pass the test implemented by the provided function. It's an excellent tool for selecting a subset of items from an array based on certain criteria.


FILTER : Let's say you're building an e-commerce website and you want to display only products that are on sale: */

 const products = [{
    name: "Product 1", 
    onSale: true, 
    price: 20 
 },
 {
    name: "Product 2", 
    onSale: false, 
    price: 30 
 }];

const productsOnSale = products.filter(product => product.onSale);
console.log(productsOnSale);    // Output: [{ name: "Product 1", onSale: true, price: 20 }, ...]

/* In this example:
--> The filter() method is called on the products array.
--> It takes a callback function as an argument. 
--> This function determines whether an element should be included in the resulting array.
--> The callback function tests each product object. 
--> It returns true if the onSale property of the product is true, indicating that the product is on sale.

The filter() method creates a new array containing only the products for which the callback function returned true.
The productsOnSale array will contain only the products that are on sale.

You can use the filter function to extract the products that are currently on sale and display them to users on the e-commerce website.
*/