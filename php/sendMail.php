<?php
    $Nombre =  $_POST['nombre'];
    $Email =  $_POST['email'];
    $Telefono = $_POST['telefono'];
    $Asunto =  $_POST['asunto'];
    $Mensaje =  $_POST['mensaje'];


    $subject = $Asunto;
    $Header = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $Header .= 'From: Victoria Rodriguez <v.rodriguez1305@gmail.com>' . "\r\n";
    
    $message = "<!DOCTYPE html PUBLIC ".'-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'.">";
    $message  .= "<html xmlns=".'http://www.w3.org/1999/xhtml'.">";
    $message  .= "<head>";
    $message  .= "<meta http-equiv=".'Content-Type'." content=".'text/html; charset=utf-8'." />";
    $message  .= "<title>$Asunto</title>";
    $message  .= "</head>";

    $message  .= "<body style='display: flex; justify-content: center; font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype', 'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;'>";
    $message  .= "<div style='width: 100%; max-width: 800px; background-color: #ffffff'>";
    $message  .= "<div style='height: 90px; background-color: #284168'> <img src='http://http://www.innovacenter.cl/assets/img/global-cobro-shadow.png' style='height: 50px; margin-top: 20px; margin-left: 20px'/></div>";

    $message  .= "<div style='padding: 1.5rem'>";
    $message  .= "<h2 style='margin-top: 0px; color: #1a242d; font-weight: 600'>Solicitud de contacto desde la página web</h2>";

    $message  .= "<p style='margin: 0px 0px 5px 0px; color: #1a242d; font-weight: 300'><strong>Nombre:</strong> $Nombre </p>";
    $message  .= "<p style='margin: 0px 0px 5px 0px; color: #1a242d; font-weight: 300'><strong>Email:</strong> $Email </p>";
    $message  .= "<p style='margin: 0px 0px 5px 0px; color: #1a242d; font-weight: 300'><strong>Teléfono:</strong> $Telefono </p>";
    $message  .= "<p style='margin: 0px 0px 5px 0px; color: #1a242d; font-weight: 300'><strong>Mensaje:</strong> $Mensaje </p>";

    $message  .= "</div>";

    $message  .= "<div style='min-height: 80px; background-color: #f2f2f2; display: flex; justify-content: center; align-items: center;  text-align: center'>";
    $message  .= "<p style='margin: 0px; color: #1a242d; font-weight: 300; text-align: center; margin-top: 30px; width: 100%'>Correo enviado desde: <a href='http://www.innovacenter.cl/' target='_blank' style='color: #5B95EA;'>http://www.innovacenter.cl</a></p>";
    $message  .= "</div>";

    $message  .= "<div style='height: 50px; background-color: #284168'></div>";
    $message  .= "</div>";
    $message  .= "</body>";
    $message  .= "</html>";

    if(mail('v.rodriguez1305@gmail.com', $subject, $message, $Header)){
        echo "200";
    }else{
        echo "500";
    }
?>