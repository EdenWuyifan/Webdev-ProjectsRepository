<!DOCTYPE html>
<html>
<head>
	<title>PHP: calculator result</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Zhi+Mang+Xing&display=swap" rel="stylesheet">
</head>
<body>
	<?php
		$numone = $_POST['number1'];
		$numtwo = $_POST['number2'];
		$num1 = floatval($numone);
		$num2 = floatval($numtwo);
		$operator = $_POST['operator'];
		if($operator == '+'){
			$output = $num1 + $num2;
			print("$num1 + $num2 = $output");
		}
		elseif($operator == '-'){
			$output = $num1 - $num2;
			print("$num1 - $num2 = $output");
		}
		elseif($operator == '*'){
			$output = $num1 * $num2;
			print("$num1 * $num2 = $output");
		}
		elseif($operator == '/') {
			$output = $num1 / $num2;
			print("$num1 / $num2 = $output");
		}
		else{
			print("!unrecognized operator!");
		}

	?>

</body>
</html>