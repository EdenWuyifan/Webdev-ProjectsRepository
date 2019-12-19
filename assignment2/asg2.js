//1. style application
function change(){
	var x = document.getElementsByTagName("h1");
	for(i=0,len = x.length;i<len;i++){
		x[i].style.color="#3030FF"; 
		x[i].style.backgroundColor = "black";
		x[i].style.fontSize = "70px";
		x[i].style.fontStyle = "italic";
		x[i].style.border = "thick solid #3030FF";
	}
}


//2. Prize application
function randArray(){
	var prizes = ["Tesla car", "Coach purse" , "iPhone 11pro" , "$500" , "Tissue"]
	document.write("<h2>The list of prizes you could win:</h2>");
	for(i=0,len=prizes.length;i<len;i++){
		document.write(prizes[i],"<br>");
	}
	var x = Math.floor((Math.random() * 5));
	document.write("<h1>Your prize is:</h1>");
	document.write("<h1 id='prize'>",prizes[x],"</h1>")
}

//3. Swap text application
function swapT(){
	var x = document.getElementById("p1");
	var y = document.getElementById("p2");
	var temp = x.textContent;
	x.textContent = y.textContent;
	y.textContent = temp;
}

//4. Swap image application
function swapI(){
	var x = document.getElementById("img1");
	var y = document.getElementById("img2");
	var temp = x.src;
	x.src = y.src;
	y.src = temp;

}

//5. Generate new document application
function newDoc(){
	var img = document.getElementById("img3");
	var path = img.src;
    var index = path.lastIndexOf("/");
    var filename = path;
    var width = img.clientWidth;
	var height = img.clientHeight;
	var weekday = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    if(index !== -1) {     
        filename = path.substring(index+1,path.length);
    }
	document.open();
	document.write("<h1>",filename,"</h1>");
	document.write("<p>This image is called ",filename,". And the path of the image is ",path,". It is indeed a very beautiful image!!!</p>");
	document.write('<img id="img3" width="50%" onclick = "newDoc()" src="',path,'">');
	document.write("<p>This image is ",width," wide and ",height," high.</p>");
	var thisTime = new Date();
	var date = thisTime.getFullYear()+'-'+(thisTime.getMonth()+1)+'-'+thisTime.getDate();
	var time = thisTime.getHours() + ":" + thisTime.getMinutes() + ":" + thisTime.getSeconds();
	weekday = weekday[thisTime.getDay()];
	var dateTime = time+' '+date+' '+weekday;
	document.write(dateTime);
	document.close();
}


//6. Simple converter application
function convert(){
	var mile = document.getElementById("mile").value;
	var kilo = mile * 1.6;
	
	document.getElementById("kilo").innerHTML = kilo;
	document.getElementById("kilo").style.color = "red";

}