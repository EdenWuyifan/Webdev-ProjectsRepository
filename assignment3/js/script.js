//Random Image Application

function random_image(Array){
	var num = Math.floor( Math.random() * Array.length);
	var image = Array[num];
	document.getElementById("random-img").src = 'image/'+image;
	document.getElementById("random-img").style.height = '200px';

}

//Slide Show Application
var i = 0;

function start_button(){
	if(i == image_array.length){
		i = 0;
	}
	var image = image_array[i];
	document.images[1].src = 'image/'+image;
	document.images[1].style.height = '200px';
	i++;
	myFlag = setTimeout(start_button, 2000);
}
function stop_button(){
	clearTimeout(myFlag);
}

//Simple Crap Game
function roll(){
	var dice1 = Math.floor(Math.random()*6+1);
	var dice2 = Math.floor(Math.random()*6+1);
	var sum = dice1+dice2;
	var bet = document.getElementById("bet").value;
	document.getElementById("dice-1").src = "image/dice_"+dice1+".gif";
	document.getElementById("dice-2").src = "image/dice_"+dice2+".gif";
	document.getElementById("total").value = sum;
	if(bet === ""){
		document.getElementById("result").innerHTML += "<h4 style='color:rgb(255,100,100);'>Please enter your bet!!!</h4>";
	}else{
		if(sum === 7 || sum === 11){
			document.getElementById("result").innerHTML += "<h4 style='color:rgb(255,100,100);'>You won! The bet this round is "+bet+".</h4>";
		}else if(sum === 2 || sum === 3 || sum === 12){
			document.getElementById("result").innerHTML += "<h4 style='color:rgb(100,255,100);'>You lose! The bet this round is "+bet+".</h4>";
		}
	}
	document.getElementById("bet").value = bet;	
}
function reset(){
	document.getElementById("dice-1").src = "image/dice_1.gif";
	document.getElementById("dice-2").src = "image/dice_1.gif";
	document.getElementById("result").innerHTML = "";
	document.getElementById("bet").value = "";
}

//NYU Holiday Calendar application
var NYUcalendar = {
	"2019-09-02":["Labor Day","laborday.jpg"],
	"2019-10-14":["Fall Recess","fallrecess.jpg"],
	"2019-11-27":["Thanksgiving Recess","thanksgiving.jpg"],"2019-11-28":["Thanksgiving Recess","thanksgiving.jpg"],"2019-11-29":["Thanksgiving Recess","thanksgiving.jpg"],
	"2019-12-21":["Winter Recess","winterrecess.jpg"],"2019-12-22":["Winter Recess","winterrecess.jpg"],"2019-12-23":["Winter Recess","winterrecess.jpg"],"2019-12-24":["Winter Recess","winterrecess.jpg"],"2019-12-25":["Winter Recess","winterrecess.jpg"],"2019-12-26":["Winter Recess","winterrecess.jpg"],"2019-12-27":["Winter Recess","winterrecess.jpg"],"2019-12-28":["Winter Recess","winterrecess.jpg"],"2019-12-29":["Winter Recess","winterrecess.jpg"],"2019-12-30":["Winter Recess","winterrecess.jpg"],"2019-12-31":["Winter Recess","winterrecess.jpg"],"2020-01-01":["Winter Recess","winterrecess.jpg"],"2020-01-02":["Winter Recess","winterrecess.jpg"],"2020-01-03":["Winter Recess","winterrecess.jpg"],"2020-01-04":["Winter Recess","winterrecess.jpg"],"2020-01-05":["Winter Recess","winterrecess.jpg"],
	"2020-02-17":["Presidents' Day","presidentsday.jpg"],
	"2020-03-16":["Spring Recess","springrecess.jpg"],"2020-03-17":["Spring Recess","springrecess.jpg"],"2020-03-18":["Spring Recess","springrecess.jpg"],"2020-03-19":["Spring Recess","springrecess.jpg"],"2020-03-20":["Spring Recess","springrecess.jpg"],"2020-03-21":["Spring Recess","springrecess.jpg"],"2020-03-22":["Spring Recess","springrecess.jpg"],
	"2020-05-25":["Memorial Day","memorialday.jpg"],
	"2020-06-03":["Independence Day","independenceday.jpg"],"2020-06-04":["Independence Day","independenceday.jpg"]

};
var month = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
function check_date(){
	var date = document.getElementById("enter-date").value;
	var dateArray = date.split('-');
	document.getElementById("display-date").innerHTML = "";
	if(date in NYUcalendar){
		document.getElementById("display-date").innerHTML += "<h4>"+month[parseInt(dateArray[1])-1]+" "+dateArray[2]+", "+dateArray[0]+" is "+NYUcalendar[date][0]+". This is an NYU holiday.</h4>";
		document.getElementById("display-date").innerHTML += "<img src='image/"+NYUcalendar[date][1]+"' width='300px'>"
		document.getElementById("display-date").innerHTML += "<br><p style='color:rgb(164,169,187)'>All images are from google images.</p>"
	}else if((dateArray[1] >= 9 && dateArray[0] == 2020) || (dateArray[0] > 2020)){
		document.getElementById("display-date").innerHTML += "<h4>"+month[parseInt(dateArray[1])-1]+" "+dateArray[2]+", "+dateArray[0]+" falls outside the range of dates for which data is available.</h4>"
	}else{
		document.getElementById("display-date").innerHTML += "<h4>"+month[parseInt(dateArray[1])-1]+" "+dateArray[2]+", "+dateArray[0]+" is not a school holiday at NYU.</h4>"
	}
}
