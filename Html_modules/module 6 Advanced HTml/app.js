document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        const password = passwordInput.value;

        // Simple password length check
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            e.preventDefault(); // stop form from submitting
        }
    });
});
