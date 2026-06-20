loadProducts();

async function loadProducts() {

    const response = await fetch(
        "http://localhost:5146/api/Products"
    );

    const products = await response.json();

    let html = "";

    products.forEach(product => {

        html += `
        <div class="product-card">

            <img src="${product.imageUrl}"
                 alt="${product.productName}">

            <h3>${product.productName}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(
                '${product.productName}',
                ${product.price}
            )">
                Add To Cart
            </button>

        </div>
        `;
    });

    document.getElementById(
        "productsContainer"
    ).innerHTML = html;
}

function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart");
}