<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Remove .php extension with .htaccess by http://www.codingcage.com/</title>
         
        </style>
    </head>
<body>
 
<h1>This is login.php page | <a href="login">click here</a> to remove .php extension and see the url in addressbar</h1>

<?php
$message = conectar();
function conectar(){
    $hostname = "172.19.10.78";
    $username = "kimobill";
    $password = "sIst2m1s2020";
    $dbname = "u263837739_sanfranciscoam";
    
    $conn = mysqli_connect($hostname,$username, $password, $dbname);
    if (mysqli_connect_errno()){
        echo "No es posible conectarse a la base de datos! Vuelve a intentarlo más tarde " . mysqli_connect_error();
    }
    else {
        //echo "hola";
        return $conn;
    }
}

?>

<a href="signup">signup here</a>
 
</body>
</html>
