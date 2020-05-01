var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var modal=document.getElementById("modal");
var modal2=document.getElementById("modal1");
var btn=document.getElementById("ok_btn");
var start=document.getElementById("start");
var sound = new Audio();
var bike_sound = new Audio();
var grass = new Image();
var cycle = new Image();
var road  = new Image();
var left_house = new Image();
var right_house = new Image();
var news_paper = new Image();

sound.src="C:/Users/Kratos Ganesh/Desktop/sound.mp3";
bike_sound.src="C:/Users/Kratos Ganesh/Desktop/bike_sound.mp3"
grass.src = "C:/Users/Kratos Ganesh/Desktop/grass.jpg";
cycle.src = "C:/Users/Kratos Ganesh/Desktop/cycle.png";
road.src  = "C:/Users/Kratos Ganesh/Desktop/road.jpg";
left_house.src = "C:/Users/Kratos Ganesh/Desktop/left_house.png";
right_house.src = "C:/Users/Kratos Ganesh/Desktop/right_house.png";
news_paper.src = "C:/Users/Kratos Ganesh/Desktop/news_paper.png";
news_paper.id="news";

window.onload=function(){
	ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
	ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
	ctx.drawImage(road,canvas.width/3,0,canvas.width/3,canvas.height);
	ctx.drawImage(cycle,135,100,30,30);
	ctx.drawImage(news_paper,50,115,10,10);
	ctx.drawImage(news_paper,50,50,20,20);
var animation;
var y=0;
y=-50;
flag=0;
var news_y=115;
function draw(){
	bike_sound.play();
	if (flag==0){
		ctx.drawImage(cycle,135,100,30,30);
		ctx.drawImage(news_paper,145,115,10,10);
		ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
		ctx.drawImage(left_house,60,y,40,40);
		y++;
		news_y++;
	}
	else{
		ctx.drawImage(cycle,135,100,30,30);
		ctx.drawImage(news_paper,145,115,10,10);
		ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
		ctx.drawImage(right_house,200,y,40,40);

		y++;
	}
	if (y>canvas.width/2+100){
		flag=Math.floor(Math.random() * 2);
		y=-50;
	}
	animation=window.requestAnimationFrame(draw);
}

var score=0;
var missed=0;
var flag2=0;

document.addEventListener("keydown",received);
function received(e){
	if(e.code=="ArrowLeft"){
		if(flag==0 && (y>=80 && y<=130)){
			score++;
			ctx.drawImage(news_paper,100,115,10,10);
			setTimeout(function(){
				ctx.drawImage(road,canvas.width/3,0,canvas.width/3,canvas.height);
				ctx.drawImage(cycle,135,100,30,30);
			},500);
			
			document.getElementById("score").innerText="Distributed = "+score;
		}
		else{
			missed++;
			if(missed>=5){
				window.cancelAnimationFrame(animation);
				document.getElementById("modal_score").innerText=score;
				sound.play();
				modal.style.visibility="visible";

			}
			document.getElementById("wasted").innerText="Missed Out = "+missed;
		}
	}
	if(e.code=="ArrowRight"){
		if(flag==1 && (y>=80 && y<=130)){
			score++;
			ctx.drawImage(news_paper,190,115,10,10);
			setTimeout(function(){
				ctx.drawImage(road,canvas.width/3,0,canvas.width/3,canvas.height);
				ctx.drawImage(cycle,135,100,30,30);
			},500);
			document.getElementById("score").innerText="Distributed = "+score;
		}
		else{
			missed++;
			if(missed>=5){
				window.cancelAnimationFrame(animation);
				document.getElementById("modal_score").innerText=score;
				sound.play();
				modal.style.visibility="visible";
			}
			document.getElementById("wasted").innerText="Missed Out = "+missed;
		}
	}
}

btn.onclick=function(){
	modal.style.visibility="hidden";
	location.reload();
}

start.onclick=function(){
	modal2.style.visibility="hidden";
	setTimeout(function(){
		animation=window.requestAnimationFrame(draw);
	},1000);
}

};

