<?php 
        $serverName = "localhost";
        $username = "Kirti";
        $password = "test123";
        $databasename = "wadprojectfinal";
        $conn = mysqli_connect($serverName, $username, $password, $databasename);
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

         
       $query= "INSERT INTO volunteer_db_final (`name`, `email`, `phone`, `message`) VALUES ('$name ', '$email', '$phone', '$message')";
        if( mysqli_query($conn, $query)){
            echo "Thank you for showing Interest in volunteering with us. We will reach out to you soon.";
            
        }
        else{
            echo "errorrrr". die(mysqli_error($conn));
        }
     
    ?>
