<!DOCTYPE html>
<html>
<head>
	<title>PHP: online quiz</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Zhi+Mang+Xing&display=swap" rel="stylesheet">
</head>
<body>
<?php
    $first = $_POST['firstname'];
    $last = $_POST['lastname'];
	$score = 0;
	$cool = $_POST['cool-1'];
	print("<h1>$last $first,</h1>");
	if($cool == 'wack'){
		print("<li>You think you are a total wack!</li><br>");
		$score += 0;
	}
	elseif($cool == "lame"){
		print("<li>You think you are kinda lame!</li><br>");
		$score += 1;
	}
	elseif($cool == "cool"){
		print("<li>You think you are cool!</li><br>");
		$score += 2;
	}
	elseif($cool == "noice"){
		print("<li>You think you are beyond cool!</li><br>");
		$score += 3;
	}
	elseif($cool == "worldwide"){
		print("<li>You think you are marvolous!</li><br>");
		$score += 4;
	}

	$cool = $_POST['cool-2'];
	if($cool == 'wack'){
		print("<li>Your friends think you are totally not cool!</li><br>");
		$score += 0;
	}
	elseif($cool == "lame"){
		print("<li>Your friends think you are barely cool!</li><br>");
		$score += 1;
	}
	elseif($cool == "cool"){
		print("<li>Your friends think you are so-so!</li><br>");
		$score += 2;
	}
	elseif($cool == "noice"){
		print("<li>Your friends think you are very coooool!</li><br>");
		$score += 3;
	}
	elseif($cool == "worldwide"){
		print("<li>Your friends think you are marvolous!</li><br>");
		$score += 4;
	}
	
	$cool = $_POST['cool-3'];
	if($cool == 'wack'){
		print("<li>Your parents just don't like you!</li><br>");
		$score += 0;
	}
	elseif($cool == "lame"){
		print("<li>Your parents think you are naughty all the time!</li><br>");
		$score += 1;
	}
	elseif($cool == "cool"){
		print("<li>Your parents think you are stylish!</li><br>");
		$score += 2;
	}
	elseif($cool == "noice"){
		print("<li>Your parents think you are just great!</li><br>");
		$score += 3;
	}
	elseif($cool == "worldwide"){
		print("<li>Your parents think you are the best kid!</li><br>");
		$score += 4;
	}
	print("Your total score is $score!<br>");

	if($score > 8 && $score <= 12){
		print("You are the coolest man alive!");
	}
	elseif($score > 4 && $score < 9){
		print("You are not that cool, you are just so-so.");
	}
	else{
		print("Man you kinda lame, ya know?");
	}
?>

</body>
</html>