<!DOCTYPE html>
<html>
<head>
	<title>PHP: mad libs</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Zhi+Mang+Xing&display=swap" rel="stylesheet">
</head>
<body>
	<?php
		$adj1 = $_POST['adjective-1'];
		$adj2 = $_POST['adjective-2'];
		$noun1 = $_POST['noun-1'];
		$verb1 = $_POST['verb-1'];
		$noun2 = $_POST['noun-2'];
		$num = $_POST['number'];
		$verb2 = $_POST['verb-2'];
		$noun3 = $_POST['noun-3'];

		print("Here is your <h2 style = 'display:inline;'>Mad Libs</h2> output:<br>");
		print("<br>The $adj1 $noun1 $verb1 the $adj2 house.<br> There she saw a $noun2 $verb2 with $num $noun3");
	?>

</body>
</html>