const productGrid = document.querySelector('.container')
fetch('user.json') 

// fetching products in json file //.then speeds up the process to fetch the project. The for loop was made to get all 12 items and to create the product section with each item being child of the parent 'product section'. This can be edited with the 'container' element made in the index.HTML.

.then(response => response.json())
.then(json => {
    const products = json;
    for(let i = 0; i < 12; i++) {
        const allProducts = document.createElement('product-section');
        productGrid.appendChild(allProducts);
    
   //This is used to attack the items in the json file and can be used as classes to edit in the CSS. 

        allProducts.innerHTML = `
        <img src=${products[i].location}>
        <p class="name">${products[i].name}</p>
        <p class="price">${products[i].price}</p>
        <p class="desc">${products[i].desc}</p>
        `
    }

})
.catch(error => console.log(error))

//catch is used to catch errors in the console just in case something goes wrong it can alert the user.

// Contact Form Validation//

const enterName = document.getElementById("#name")
const enterEmail = document.getElementById("#email")
const enterMessage = document.getElementById("#message")
const enterSubmit = document.getElementById("#submit")

//If a user enters nothing in the input box then the submit button will disable and the form will not be subitted until the user enters correct formant. This is done through a if/else statement.

function validateForm() {
    if(enterName.value === "" || enterEmail.value === "" || enterMessage.value === "")
    {
        enterSubmit.classList.add("disabled")
    }
else {
    enterSubmit.classList.remove("disabled")
}
    }
    //Adding an even listener waits for the user to hit submit after entering text into the following input boxes. The function is done executed
    enterName.addEventListener("input", validateForm);
    enterEmail.addEventListener("input", validateForm);
    enterMessage.addEventListener("input", validateForm);
   