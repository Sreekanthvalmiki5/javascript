//map is one to one you will return single value 
//flatmap is one to many you will return many values



var products = [{ productname: "tv", price: 40000, company: "lg" },
    { productname: "fridge", price: 40000, company: "lg" },
    { productname: "ac", price: 40000, company: "voltas" },

    { productname: "applemobile", price: 40000, company: "apple" },


]
var updatedproducts = products.flatMap((s) => {
    // var ss={...s,price=s.pri}
    //to manipulate the objects and returns the values 
    return s;





});
console.log(updatedproducts);