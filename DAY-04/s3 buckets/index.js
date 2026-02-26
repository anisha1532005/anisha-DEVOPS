function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    if (email === "" || password === "") {
        msg.textContent = "Please fill all fields";
        msg.style.color = "orange";
        return false;
    }

    // Demo login
    if (email === "admin@example.com" && password === "12345") {
        msg.textContent = "Login Successful!";
        msg.style.color = "lightgreen";

        // Redirect after 1 second
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } else {
        msg.textContent = "Invalid Email or Password";
        msg.style.color = "red";
    }

    return false;
}