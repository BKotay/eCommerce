fetch('user.json') // fetching products in json file //.then speeds up the process to fetch the project
.then(response => response.json())
.then(json => {
    const products = json;
    return products
})
.catch(error => console.log(error))

const productGrid = document.querySelector('.container')

for(let i = 0; i < 12; i++) {
    const allProducts = document.createElement('div');
    productGrid.appendChild(allProducts);


    allProducts[i].textContent = products.name;
}