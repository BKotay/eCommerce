const productGrid = document.querySelector('.container')
fetch('user.json') // fetching products in json file //.then speeds up the process to fetch the project
.then(response => response.json())
.then(json => {
    const products = json;
    for(let i = 0; i < 12; i++) {
        const allProducts = document.createElement('product-section');
        productGrid.appendChild(allProducts);
    
    
        allProducts.innerHTML = `
        <img src=${products[i].location}>
        <p class="name">${products[i].name}</p>
        <p class="price">${products[i].price}</p>
        <p class="desc">${products[i].desc}</p>
        `
    }
})
.catch(error => console.log(error))


