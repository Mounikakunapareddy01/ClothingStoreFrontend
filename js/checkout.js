let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += item.price;
});

document.getElementById(
    "checkoutTotal"
).textContent = total;

async function placeOrder() {
     if(cart.length === 0){

        alert("Your cart is empty");

        return;
    }

    const customerName =
        document.getElementById(
            "customerName"
        ).value;

    const phoneNumber =
        document.getElementById(
            "phoneNumber"
        ).value;

    const address =
        document.getElementById(
            "address"
        ).value;

    if (
        customerName === "" ||
        phoneNumber === "" ||
        address === ""
    ) {
        alert(
            "Please fill all details"
        );
        return;
    }

    const customer = {

        customerName: customerName,

        phoneNumber: phoneNumber,

        address: address
    };

    const customerResponse =
        await fetch(
            "http://localhost:5146/api/Customers",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify(
                    customer
                )
            }
        );

    const savedCustomer =
        await customerResponse.json();

    const order = {

        customerId:
            savedCustomer.customerId,

        totalAmount: total
    };

    await fetch(
        "http://localhost:5146/api/Orders",
        {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json"
            },
            body: JSON.stringify(
                order
            )
        }
    );

    localStorage.removeItem(
        "cart"
    );

    window.location.href =
        "order-success.html";
}