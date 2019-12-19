
//Part I

//select the qt object
var qt1 = document.getElementById("qt-1");
var qt2 = document.getElementById("qt-2");
var qt3 = document.getElementById("qt-3");
var qt4 = document.getElementById("qt-4");
//select the price value
var price1 = document.getElementById("price-1").value;
var price2 = document.getElementById("price-2").value;
var price3 = document.getElementById("price-3").value;
var price4 = document.getElementById("price-4").value;
//select the subtotal value
var st1 = document.getElementById("stotal-1");
var st2 = document.getElementById("stotal-2");
var st3 = document.getElementById("stotal-3");
var st4 = document.getElementById("stotal-4");
//select the grandtotal value
var gt = document.getElementById("gtotal");

qt1.addEventListener("change",total);
qt2.addEventListener("change",total);
qt3.addEventListener("change",total);
qt4.addEventListener("change",total);

function total(){
	st1.value = price1 * qt1.value;
	st2.value = price2 * qt2.value;
	st3.value = price3 * qt3.value;
	st4.value = price4 * qt4.value;
	gt.value = price1 * qt1.value + price2 * qt2.value + price3 * qt3.value + price4 * qt4.value;

}

//Get checkout form
var obj = document.forms[1];

obj.addEventListener('submit',function(e)
{
	var output = "<section id='sec-5' style='height: 500px; width: 40%; float: center; margin-top: 20px; margin-left: 28%; margin-right: 30%;'><p id = 'reciept-title'>You can see your digital reciept here!</p>";

	e.preventDefault();
	//console.log("hi");
	var len = obj.elements.length;
	for(var i = 0; i<len-2; i++){
		if(obj.elements[i].value == "" || obj.elements[i].value == null){
			alert("You must enter a vlaue for " + obj.elements[i].name);

			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor = "rgb(231,91,78)";

			return;
		}else if(i == 2 && obj.elements[i].value.length != 5){
			alert("There must be 5 digits for any zipcodes!");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor = "rgb(231,91,78)";
			return;
		}else if(i == 3 && obj.elements[i].value.indexOf("@") == -1) {
			alert("Your email should contains a '@' in it!");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor = "rgb(231,91,78)";
			return;
		}else if(i == 3 && obj.elements[i].value.indexOf(".") == -1) {
			alert("Your email should contains a '.' in it!");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor = "rgb(231,91,78)";
			return;
		}else{
			if(obj.elements[i].type == 'radio' && obj.elements[i].checked == false){
				output += "";
			}else{
				output += "<p>";
				output += obj.elements[i].name;
				output += " : ";
				output += obj.elements[i].value;
				output += "</p>";
			}
			
		}
	}
	output += "<h3>YOUR PURCHASE IS: $" + gt.value + " IN TOTAL</h3>"
	output += "<h4>Thank you for your generous purchase!</h4>"
	output += "</section>";
	document.getElementById("demo").innerHTML = output;
});


//Part II
var obj2 = document.getElementById('bt-expand');
obj2.addEventListener("click",function(e)
{
	e.preventDefault();
	
	var Li = document.getElementById("navbar").getElementsByTagName("li");
	if(Li.length == 2){
		var node = document.createElement("li");
		var textnode = document.createTextNode("Just kidding!");
		node.appendChild(textnode);
		document.getElementById("navbar").appendChild(node);

		var node2 = document.createElement("li");
		var textnode = document.createTextNode("There are no assignments");
		node2.appendChild(textnode);
		document.getElementById("navbar").appendChild(node2);

	}
});


