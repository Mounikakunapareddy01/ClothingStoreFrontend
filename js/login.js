async function login() {

    const loginUser = {

        email:
        document.getElementById("email").value,

        password:
        document.getElementById("password").value
    };

    const response = await fetch(
        "http://localhost:5146/api/Users/Login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser)
        }
    );

    if(response.ok){

        window.location.href =
            "home.html";
    }
    else{

        alert(
            "Invalid Email or Password"
        );
    }
}