var colors=[];
var number=6;
var  colors=generaterandomcolors(number);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	number=3
	colors=generaterandomcolors(number);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor; 
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");	
	number=6;
	colors=generaterandomcolors(number);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor; 
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";	}
});
reset.addEventListener("click",function(){
	colors=generaterandomcolors(number);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	this.textContent="New Color";
	messagedisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue"; 
})
for(var i=0;i<squares.length;i++){

	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	var clickedcolor=this.style.background;
if(clickedcolor === pickedcolor){
	messagedisplay.textContent="Correct!";
	reset.textContent="Play Again?"
	changecolor(clickedcolor);
	h1.style.background=clickedcolor;
}
else{
	this.style.background="#232323";
messagedisplay.textContent="Try Again"
}
	});
}
function changecolor(color){
	for (var i = 0;i<squares.length; i++) {
		squares[i].style.background=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()* colors.length)
	return colors[random];
}
function generaterandomcolors(num){
	var arr=[]
 for (var i = 0;i<num; i++) {
 	arr.push(randomcolor())
 }
	return arr;
}
function randomcolor(){
	var R=Math.floor(Math.random()*256);
	var G=Math.floor(Math.random()*256);
	var B=Math.floor(Math.random()*256);
	return "RGB("+ R + ", "+ G +", " + B +")";
 }
