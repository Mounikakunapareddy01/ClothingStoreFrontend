let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function displayCart() {

    let html = "";

    let total = 0;

    cart.forEach((item, index) => {

        html += `
        <div class="cart-item">

            <span>
                ${item.name} - ₹${item.price}
            </span>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>
        `;

        total += item.price;

    });

    document.getElementById(
        "cartContainer"
    ).innerHTML = html;

    document.getElementById(
        "totalPrice"
    ).textContent = total;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function checkout() {
    if(cart.length === 0){

        alert("Please add products to cart");

        return;
    }

    window.location.href =
        "checkout.html";
}