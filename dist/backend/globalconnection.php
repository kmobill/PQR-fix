<?php 
	function conectar(){
		/* $hostname = "172.19.10.78";
		$username = "kimobill";
		$password = "sIst2m1s2020";
		$dbname = "u263837739_sanfranciscoam"; */
		$hostname = "localhost";
		$username = "usraccsfa";
		$password = "S1nfr1n&*S3rt3cMG";
		$dbname = "sanfranciscoambato";
		
		$conn = mysqli_connect($hostname,$username, $password, $dbname);
		$conn->set_charset("utf8");
		if (mysqli_connect_errno()){
			echo "No es posible conectarse a la base de datos! Vuelve a intentarlo más tarde " . mysqli_connect_error();
		}
		else {
			return $conn;
		}
	}
