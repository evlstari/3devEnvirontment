// Event listener untuk form login
document.getElementById('login-form').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    // Reset pesan error sebelumnya
    errorMessage.textContent = "";

    // Validasi username dan password
    if (username.trim() === "") {
        errorMessage.textContent = "Username harus diisi.";
        event.preventDefault();  // Mencegah form untuk submit
    } else if (password.trim() === "") {
        errorMessage.textContent = "Password harus diisi.";
        event.preventDefault();  // Mencegah form untuk submit
    }
});
