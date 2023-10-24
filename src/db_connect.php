<?php
    // connect to the database
    $conn = mysqli_connect('localhost','web','test','KEEL_Inventory');

    // Check Connection
    if(!$conn) {
        echo 'Database Connection Error: ' . mysqli_connect_error();
    }
?>