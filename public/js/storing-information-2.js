var elements = ["Characters: ", "Setting: ", "Theme: "];

//title
document.getElementById("title").innerHTML = "<h2>A Title You Think Better Suits the Story</h2";
//date
var d = new Date();
document.getElementById("date").innerHTML = "Date Posted: " + d.toDateString();

//names
var str = document.getElementById("names").innerHTML; 
var txt = str.replace("Nino","Alonzo");
var txt2 = txt.replace("Taylor Swift","Katy Perry");
document.getElementById("names").innerHTML = txt2;

//upper
var text = document.getElementById("upper").innerHTML;
document.getElementById("upper").innerHTML = text.toUpperCase();

//parts
document.getElementById("characters").innerHTML = "<strong>" + elements[0] + "</strong>A waitress and a boy";
document.getElementById("setting").innerHTML = "<strong>" + elements[1] + "</strong>In a coffee shop";
document.getElementById("theme").innerHTML = "<strong>" + elements[2] + "</strong>Write your own theme of the story!";

