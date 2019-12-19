<!DOCTYPE html>
<html>
<head>
	<title>PHP: online shop</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Zhi+Mang+Xing&display=swap" rel="stylesheet">
</head>
<body>
	<?php
		$name = $_POST['name'];
		$email = $_POST['email'];
		$product = $_POST['product'];
		$qt = $_POST['qt'];

		if($product == "Balenciaga"){
			$total = 899 * $qt;
		}
		elseif($product == "Louis Votton"){
			$total = 1299 * $qt;
		}
		print("<h2>Your Receipt</h2>");
		print("Name: $name <br>");
		print("Email: $email <br>");
		print("Product: $product <br>");
		print("Total: $$total <br>");
	?>
</body>
</html>