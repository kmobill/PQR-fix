<?php 
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
			return $conn;
		}
	}	
?>
