<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';
require './email/Exception.php';
require './email/PHPMailer.php';
require './email/SMTP.php';


if (isset($_POST['submit'])){
    $name= $_POST['name'];
    $email= $_POST['email'];
    $body= $_POST['body'];
	$phone=$_POST['phone'];
	
	
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
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       =587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('rfcentp@gmail.com', 'Refac Enterprises');     // Add a recipient
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Message from website';
    $mail->Body    = 'Message from: '.$name.'<br> Phone: '.$phone.' <br> Email: '.$email.'<br> Message: '.$body;

    $mail->send();
	header('Location:/message');
	}
	
catch (Exception $e) {
	header('Location:/error');
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	//$_SESSION['err'] = $mail->ErrorInfo;
}
}
else{
    echo 'Message not sent';
	header('Location:/error');
}