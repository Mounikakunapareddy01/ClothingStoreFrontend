loadCustomers();

async function loadCustomers() {

    const response = await fetch(
        "http://localhost:5146/api/Customers"
    );

    const customers = await response.json();

    let html = "";

    customers.forEach(customer => {

        html += `
        <tr>

            <td>${customer.customerId}</td>

            <td>${customer.customerName}</td>

            <td>${customer.email ?? ""}</td>

            <td>${customer.phoneNumber}</td>

            <td>${customer.address}</td>

        </tr>
        `;
    });

    document.getElementById(
        "customerTableBody"
    ).innerHTML = html;
}