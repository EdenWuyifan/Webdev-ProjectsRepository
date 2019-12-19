$(document).ready(function(){
	$('nav').hide().delay(500).fadeIn(1000);
	//link 1
	$('.links').eq(0).on('click',function(){
		$('section').empty();

		var $h1 = '<h1 id="special">Test Test Test</h1>';
		var $highlight = '<div class="highlight"><p>This is my paragraph1.</p><p>Is this my paragraph2?</p><p>This is paragraph3 haha!</p></div>';
		var $button = '<button id="change">Change styles</button>';

		$('section').html($h1+$highlight+$button);

			$('#change').on('click',function(){
				$('#special').css("color","green");
				//$('.highlight').css("background-color","beige");

				$('p').each(function(){
					$(this).css("border","1px solid black");
					$(this).css("text-decoration","underline dotted");
					$(this).css("color","black");
					$(this).css("background-color","beige");
					alert($(this).html());
			});
		});
	});


	//link 2
	$('.links').eq(1).on('click',function(){
		$('section').empty();

		var $img = '<img id="image" height = "300px" src = "image/test.jpg"><br>';
		var $button1 = '<button id="show">show</button>';
		var $button2 = '<button id="hide">hide</button>';
		var $button3 = '<button id="fadeout">fade out</button>';

		$('section').html($img+$button1+$button2+$button3);

		$('#show').on('click',function(){
			$('#image').show();
		});
		$('#hide').on('click',function(){
			$('#image').hide();
		});
		$('#fadeout').on('click',function(){
			$('#image').fadeOut("slow");
		});
	});

	//link 3
	$('.links').eq(2).on('click',function(){
		$('section').empty();

		var $animate = '<div id="animatee" style = "align:center;background:beige;height:50px;width:50px;position:relative;"></div><br>';
		var $button1 = '<button id="animate">animate</button>';

		$('section').html($animate+$button1);

		$('#animate').on('click',function(){
			$('#animatee').animate({
				left:'250px',
				width:'200px',
				height:'200px',
				opacity:'0.5'
			});
		});

	});

	//link 4
	$('.links').eq(3).on('click',function(){
		$('section').empty();

		var $user = 'username: <input id="user" type="text" name="username"><br>';
		var $password = 'password: <input id="password" type="text" name="password"><br>';
		var $button = '<button id="submit">login</button><br>';
		var $demo = '<div id="demo"></div>';

		$('section').html($user+$password+$button+$demo);

		$('#submit').on('click',function(){
			if($('#user').val() == ""){
				$('#user').focus();
				$('#user').select();
				$('#user').css("background-color","yellow");
				alert("Please put a value inside username field!");
			}
			else if($('#password').val() == ""){
				$('#password').focus();
				$('#password').select();
				$('#password').css("background-color","yellow");
				alert("Please put a value inside password field!");
			}
			else{
				$('#user').css("background-color","white");
				$('#password').css("background-color","white");
				$output = "Username: "+$('#user').val()+"<br>Password:"+$('#password').val();
				$('#demo').html($output);
			}
		});

	});
});