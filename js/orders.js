loadOrders();

async function loadOrders() {

    const response = await fetch(
        "http://localhost:5146/api/Orders"
    );

    const orders = await response.json();

    let html = "";

    orders.forEach(order => {

        html += `
        <tr>

            <td>${order.orderId}</td>

            <td>${order.customerId}</td>

            <td>₹${order.totalAmount}</td>

        </tr>
        `;
    });

    document.getElementById(
        "orderTableBody"
    ).innerHTML = html;
}