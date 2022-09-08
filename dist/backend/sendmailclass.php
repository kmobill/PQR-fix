<?php 
    date_default_timezone_set('America/Guayaquil');
    require_once "PHPMailer.php";
    require_once "SMTP.php";
    require_once "Exception.php";
	$to = $_POST['to'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        try {
            
            //Server settings
            $mail->SMTPDebug = 2;
            $mail->isSMTP();
            $mail->Host       = 'mail.kimobill.com';
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'notificaciones@kimobill.com';
            $mail->Password   = 'Notificaciones.3k2022$';                               //SMTP password
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
        
            //Recipients
            $mail->setFrom('notificaciones@kimobill.com', 'Tickets App');
            // $mail->addAddress('developer_analyst@kimobill.com');               //Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');
            $mail->addAddress($to);               //Name is optional
        
            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $body;
            //$mail->Body    = 'test';
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();
            echo 'Message has been sent';

            /*
            //Server settings
            $mail->SMTPDebug = 1;
            $mail->isSMTP();
            $mail->Host       = 'smtp.ionos.com';
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'mesa.ayuda@coac-sanfra.com';
            $mail->Password   = 'Ayuda.001';                               //SMTP password
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
        
            //Recipients
            $mail->setFrom('mesa.ayuda@coac-sanfra.com', 'Tickets App');
            $mail->addAddress('ronny_ricard1@hotmail.es');               //Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');
        
            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subject;
            //$mail->Body    = $body;
            $mail->Body    = 'this is a test';
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();
            echo 'Message has been sent';
            */
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
