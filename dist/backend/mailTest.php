<?php 
    date_default_timezone_set('America/Guayaquil');
    require_once "PHPMailer.php";
    require_once "SMTP.php";
    require_once "Exception.php";


    $subject = "Ticket escalado: ";

    $body2 = '
                          <html>
  

                          <body style="margin: 0;padding: 0; background-color: #142247;">
                           
                              <div style="
                              height: 620px;
                              width: 1100px;
                              margin: auto;
                              ">
                                <img
                                  style="width: 400px;"
                                  alt="SF icon"
                                  src="https://drive.google.com/uc?export=view&id=1AEc-CAzNFxqbQXLNh2adY1nxl39bnoj9"
                                /></img>
                                <div style="
                                width: 80%;
                                border-radius: 10px;
                                margin: auto;
                                ">
                                  <div style="padding: 2px 15px;
                                  color: #dddddd;
                                  font-size: 12px;
                                  border: 1px solid #dddddd;
                                  text-align: left;
                                  border-top-left-radius: 5px;
                                  border-top-right-radius: 5px;">
                                    <h3 >Estimado/a ${adminName},</h3>
                                    <h3>
                                    El asesor  ${pname}, ha solicitado la re-apertura del ${nticketid}.
                                    </h3>
                                  </div>
                                  <div style=" background-color: #dddddd;
                                  border-bottom-left-radius: 5px;
                                  border-bottom-right-radius: 5px;
                                  color: #193463;
                                  font-size: 10px;">
                                      <h1 style="margin-left: 15px; margin-top: 10px; color: #00235e;
                                                                    font-size: 14px;">Puede autorizarlo ingresando en el siguiente link: 
                                                                    <a href=${urlReopenticket}>Ir a autorizar</a>
                                                                    </h1>
                                      <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                                                    font-size: 14px;">Tipo incidencia:  ${ datatemp[7] }</h1>
                                      <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                                                    font-size: 14px;">Sub-tipo incidencia:  ${ datatemp[8] }</h1>
                                      <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                                                    font-size: 14px;">
                                        Comentario:  ${$( "#observacionesincidencia"
                                        ).val()}
                                      </h1>
                                      <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                                                    font-size: 14px;"> Saludos, </h1>
                                      <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                                                    font-size: 14px;"> Administrador del sistema. </h1>
                                    
                                  </div>
                                </div>
                              </div>
                            
                        
                          </body>
                        </html>
                          ';

    $body =  '<html>
  

    <body style="margin: 0;padding: 0; background-color: #142247;">
     
        <div style="
        height: 620px;
        width: 1100px;
        margin: auto;
        ">
          <img
            style="width: 400px;"
            alt="SF icon"
            src="https://drive.google.com/uc?export=view&id=1AEc-CAzNFxqbQXLNh2adY1nxl39bnoj9"
          /></img>
          <div style="
          width: 80%;
          border-radius: 10px;
          margin: auto;
          ">
            <div style="padding: 2px 15px;
            color: #dddddd;
            font-size: 12px;
            border: 1px solid #dddddd;
            text-align: left;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;">
              <h3 >Estimado/a Supervisor/a,</h3>
              <h3>
                Se le ha escalado el ticket ${nticketid}, por el usuario
                ${localStorage.getItem( "ProfileName" )} , con el siguiente
                detalle:
              </h3>
            </div>
            <div style=" background-color: #dddddd;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #193463;
            font-size: 10px;">
                <h1 style="margin-left: 15px; margin-top: 10px; color: #00235e;
                                              font-size: 14px;">Producto:  ${ datatemp[6] || "" }</h1>
                <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                              font-size: 14px;">Tipo incidencia:  ${ datatemp[7] }</h1>
                <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                              font-size: 14px;">Sub-tipo incidencia:  ${ datatemp[8] }</h1>
                <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                              font-size: 14px;">
                  Comentario:  ${$( "#observacionesincidencia"
                  ).val()}
                </h1>
                <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                              font-size: 14px;"> Saludos, </h1>
                <h1 style="margin-left: 15px; margin-top: 2px; color: #00235e;
                                              font-size: 14px;"> Administrador del sistema. </h1>
              
            </div>
          </div>
        </div>
      
  
    </body>
  </html>
                                  ';

	
    //$to = $_POST['to'];
    
    //$subject = $_POST['subject'];
    //$body = $_POST['body'];
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        try {
            
            //Server settings
            //$mail->SMTPDebug = 2;
            $mail->isSMTP();
            $mail->Host       = 'mail.kimobill.com';
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'notifications@kimobill.com';
            $mail->Password   = 'Notifications.3k2022.';                               //SMTP password
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
        
            //Recipients
            $mail->setFrom('notifications@kimobill.com', 'COAC San Francisco');
            $mail->addAddress('developer_analyst@kimobill.com');               //Name is optional
            $mail->addAddress('capuz.sebastian516@gmail.com');               //Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');
            //$mail->addAddress($to);               //Name is optional
            //$mail->addAddress("software_developer@kimobill.com");               //Name is optional
        
            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = html_entity_decode($body2);
            //$mail->Body    = 'test';
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();
            echo 'Message has been sent';

        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
