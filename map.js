var products = [{ productname: "tv", price: 40000, company: "lg" },
    { productname: "fridge", price: 40000, company: "lg" },
    { productname: "ac", price: 40000, company: "voltas" },

    { productname: "applemobile", price: 40000, company: "apple" },


]
var updatedproducts = products.map((s) => { //to manipulate the objects and returns the values 
    s.price += s.price * 10 / 100;
    return s.price;





});
console.log(updatedproducts);