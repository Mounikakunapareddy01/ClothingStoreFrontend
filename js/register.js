async function register() {

    const user = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        password:
        document.getElementById("password").value
    };

    const response = await fetch(
        "http://localhost:5146/api/Users/Register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if(response.ok){

        alert("Registration Successful");

        window.location.href =
            "login.html";
    }
}