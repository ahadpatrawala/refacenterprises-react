<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

echo '<script>console.log("Got data")</script>';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';
require './email/Exception.php';
require './email/PHPMailer.php';
require './email/SMTP.php';


if (isset($_POST['name'])){
    $name= $_POST['name'];
    $email= $_POST['email'];
    $body= $_POST['body'];
    $phone=$_POST['phone'];
    
    echo '<script>console.log(\"$name\")</script>';
	
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                   // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'rfcentp@gmail.com';                   // SMTP username
    $mail->Password   = 'rfcEntp@#1';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       =587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('rfcentp@gmail.com', 'Refac Enterprises');     // Add a recipient
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Message from website';
    $mail->Body    = 'Message from: '.$name.'<br> Phone: '.$phone.' <br> Email: '.$email.'<br> Message: '.$body;
    echo '<script>console.log("reached v1")</script>';
    $mail->send();
    header('Location:/https://www.refacenterprises.com/message');
    echo '<script>console.log(\"$mail->ErrorInfo\")</script>';
	}
	
catch (Exception $e) {
    header('Location:/https://www.refacenterprises.com/error');
    echo '<script>console.log(\"$mail->ErrorInfo\")</script>';
    echo '<script>console.log("Error")</script>';
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	//$_SESSION['err'] = $mail->ErrorInfo;
}
}
else{
    header('Location:https://www.refacenterprises.com/error');
    echo '<script>console.log(\"$mail->ErrorInfo\")</script>';
    echo '<script>console.log("No data")</script>';
}