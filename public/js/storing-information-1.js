//demo1
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo1").innerHTML=z;

//demo2
var name = "Tiffany";
document.getElementById("demo2").innerHTML = name;

//demo3
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo3").innerHTML = txt.length;

//demo4
document.getElementById("demo4").innerHTML = "Hello" + " World!";

//demo5
document.getElementById("demo5").innerHTML = "Hello \"World\"!";

//demo6
var pets = ["cat", "dog", "duck"];
document.getElementById("demo6").innerHTML = pets[0];

//demo7
var person = {firstName:"Grace", lastName:"Poe", age:46};
document.getElementById("demo7").innerHTML = person.firstName + " is " + person.age + " years old.";

//demo8
var str = "Apple, Banana, Kiwi";
document.getElementById("demo8").innerHTML = str.slice(7,13);

//demo9
document.getElementById("demo9").innerHTML = str.slice(7);

//demo10
var str = "Apple, Banana, Kiwi";
document.getElementById("demo10").innerHTML = str.substr(7,6);

//demo11
var str = document.getElementById("demo11").innerHTML; 
var txt = str.replace("ex","someone new");
document.getElementById("demo11").innerHTML = txt;

//demo12
var text = document.getElementById("demo12").innerHTML;
document.getElementById("demo12").innerHTML = text.toUpperCase();

//demo13
var text = document.getElementById("demo13").innerHTML;
document.getElementById("demo13").innerHTML = text.toLowerCase();

//demo14
var lyrics1 = "I got all I need";
var lyrics2 = " when I got you and I.";
document.getElementById("demo14").innerHTML = lyrics1.concat(lyrics2);

//demo15
var str = "HELLO WORLD";
document.getElementById("demo15").innerHTML = str.charAt(0);

//demo16
var str = "r|e|a|d";
var arr = str.split("|");
document.getElementById("demo16").innerHTML = arr[0];

//demo17
/*function capture() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    document.getElementById("demo17").innerHTML = fname + "<br>" + lname;
}
*/
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
document.getElementById("demo17").innerHTML = fname.value + "<br>" + lname.value;

//demo18
var d = new Date();
document.getElementById("demo18").innerHTML = d;

//demo19
var d = new Date();
document.getElementById("demo19").innerHTML = d.toDateString();