<?php
	//get values passe from form in login.php file
	$uname=$_POST['uname'];

	$vemail=$_POST['vemail'];
	$x=(rand() . "<br>");
	//to prevent some fucking thing
	$email_from='shubham81t@hotmail.com';
	$email_subject="Auto generated password";
	$email_body="User Name: $uname.\n".
					"User Email: $vemail.\n".
						"Password: $x.\n";
	$to="shubham24t@gmail.com";

	$headers="Form: $email_from\r\n";
	$headers .="Reply-To: $vemail \r\n";
	mail($to,$email_subject,$email_body,$headers);

	header("Location: ../html/profile11.html")
	
	
?>