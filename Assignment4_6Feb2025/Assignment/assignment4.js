const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Smartphone", price: 20000, category: "Electronics" },
    { name: "Shoes", price: 2500, category: "Fashion" },
    { name: "Watch", price: 1500, category: "Accessories" },
    { name: "Bag", price: 3000, category: "Fashion" }
];

products.map((obj)=>{
return obj.name= obj.name.toUpperCase()
})
console.log(products)//[
//     { name: 'LAPTOP', price: 50000, category: 'Electronics' },
//     { name: 'SMARTPHONE', price: 20000, category: 'Electronics' },
//     { name: 'SHOES', price: 2500, category: 'Fashion' },
//     { name: 'WATCH', price: 1500, category: 'Accessories' },
//     { name: 'BAG', price: 3000, category: 'Fashion' }
//   ]

const filtered=products.filter((obj)=>{
return obj.category=='Electronics'
})

 console.log(filtered)
//  [
//     { name: 'LAPTOP', price: 50000, category: 'Electronics' },
//     { name: 'SMARTPHONE', price: 20000, category: 'Electronics' }
//   ]

const sumOfPrices = products.reduce((acc, ind) => acc + ind.price, 0);
console.log(sumOfPrices);//77000


function combinationOfAll(category) {
    return products
        .filter(obj => obj.category === category) 
        .map(obj => obj.price) 
        .reduce((acc, price) => acc + price, 0); 
}


console.log("function")

 console.log(combinationOfAll("Electronics")); //70000
 console.log(combinationOfAll("Fashion"))//5500
