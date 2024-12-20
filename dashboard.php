<?php
session_start();

// Mengecek apakah pengguna sudah login
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}

echo "Selamat datang, " . $_SESSION['username'] . "!";
?>

<!-- Tombol logout -->
<a href="logout.php">Logout</a>
