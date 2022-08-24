<?php 
	function conectar(){
		$hostname = "localhost";
		$username = "usraccsfa";
		$password = "S1nfr1n&*S3rt3cMG";
		$dbname = "sanfranciscoambato";
		
		$conn = mysqli_connect($hostname,$username, $password, $dbname);
		if (mysqli_connect_errno()){
			echo "No es posible conectarse a la base de datos! Vuelve a intentarlo más tarde " . mysqli_connect_error();
		}
		else {
			return $conn;
		}
	}	
?>