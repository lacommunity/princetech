<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "princetech_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data safely
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$message = $conn->real_escape_string($_POST['message']);

// Insert data into database
$sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Thank you, $name! Your message has been sent.'); window.location.href='contact us.html';</script>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
