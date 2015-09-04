<?php
	if(isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

	// injection protection
		$test = "/(content-type|bcc:|cc:|to:)/i";

		foreach($_POST as $key => $val) {
			
			if(preg_match($test, $val)) {
				exit;
			}
		}

	$emailAddress = $_POST['email'];

	$dbc = mysqli_connect('localhost', 'modx_test', 'modx_p4ss!', 'modx_data');

	$sql = "INSERT INTO modx_email_list (email_address, join_date) VALUES ('$emailAddress', NOW())";

	mysqli_query($dbc, $sql);

	mail( "stiletto@injecktion.com", "New Email Sign-Up: " . $emailAddress, "Hello!, \n A new email account has signed up for information: " . $emailAddress, "From:" . $emailAddress );
		
}

?>

	