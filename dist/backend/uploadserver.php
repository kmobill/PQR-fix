<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    if(count($_FILES["fileToUpload"]['name'])>0){ 
        $GLOBALS['msg'] = "";
        for($j=0; $j < count($_FILES["fileToUpload"]['name']); $j++){
            $filen = $_FILES["fileToUpload"]['name']["$j"];
            $path = '../uploadfile/'.$filen; 
            if(move_uploaded_file($_FILES["fileToUpload"]['tmp_name']["$j"],$path)){
                $GLOBALS['msg'] .= "File# ".($j+1)." ($filen) uploaded successfully<br>";
            }
        }
    }
    else {
        $GLOBALS['msg'] = "No files found to upload"; 
    }
?>
