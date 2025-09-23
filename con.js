
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve and sanitize the data
        $name = htmlspecialchars($_POST['user_name']);
        $email = htmlspecialchars($_POST['user_email']);

        // Display the received data
        echo "<h2>Thank you for your submission!</h2>";
        echo "<p>Name: " . $name . "</p>";
        echo "<p>Email: " . $email . "</p>";

        // In a real application, you would typically save this data to a database, send an email, etc.
    } else {
        echo "Form not submitted via POST method.";
    }
    time_sleep_until(microtime(true) + 2);
    exit( header("Location: New.html") );//after 2 seconds, exit the script then return to the form page
    
