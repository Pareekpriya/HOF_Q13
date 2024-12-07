let products = ["electronics","clothing","electronics","toys","clothing","toys","toys"];

let productCount = products.reduce((accumulator, item) =>{
    accumulator[item] = (accumulator[item] || 0)+1;
    return accumulator;
}, {});



let sortedproductCount = Object.entries(productCount).sort((a,b) => b[1] - a[1]);

console.log(sortedproductCount);
