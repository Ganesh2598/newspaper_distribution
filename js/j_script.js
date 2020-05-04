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
var tree1 = new Image();
var tree2 = new Image();

sound.src="sound/sound.mp3";
bike_sound.src="sound/bike_sound.mp3"
grass.src = "images/grass.jpg";
cycle.src = "images/cycle.png";
road.src  = "images/road.jpg";
left_house.src = "images/left_house.png";
right_house.src = "images/right_house.png";
tree1.src = "images/tree1.png";
tree2.src = "images/tree2.png";
news_paper.src = "images/news_paper.png";
news_paper.id="news";

window.onload=function(){
	ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
	ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
	ctx.drawImage(road,canvas.width/3,0,canvas.width/3,canvas.height);
	ctx.drawImage(cycle,135,100,30,30);
var animation;
var tx1=Math.floor(Math.random() * (canvas.width/3-40));
var ty1=(-1)*Math.floor(Math.random() * canvas.height);
var tx2=Math.floor(Math.random() * (canvas.width/3-40));
var ty2=(-1)*Math.floor(Math.random() * canvas.height);
var tx3=Math.floor(Math.random() * (canvas.width-230)+230);
var ty3=(-1)*Math.floor(Math.random() * canvas.height);
var tx4=Math.floor(Math.random() * (canvas.width-230)+230);
var ty4=(-1)*Math.floor(Math.random() * canvas.height);
var tx5=Math.floor(Math.random() * (canvas.width/3-40));
var ty5=(-1)*Math.floor(Math.random() * canvas.height);
var tx6=Math.floor(Math.random() * (canvas.width-230)+230);
var ty6=(-1)*Math.floor(Math.random() * canvas.height);
var tr1 = Math.floor(Math.random() * (35-20)+20);
var tr2 = Math.floor(Math.random() * (35-20)+20);
var tr3 = Math.floor(Math.random() * (35-20)+20);
var tr4 = Math.floor(Math.random() * (35-20)+20);
var tr5 = Math.floor(Math.random() * (35-20)+20);
var tr6 = Math.floor(Math.random() * (35-20)+20);
var y=0;
y=-50;
flag=0;
function draw(){
	bike_sound.play();
	if (flag==0){
		ctx.drawImage(cycle,135,100,30,30);
		ctx.drawImage(news_paper,145,115,10,10);
		ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
		ctx.drawImage(left_house,60,y,40,40);
		if (!(tx1>=60 && tx1<=100) && !(ty1>=y && ty1<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(left_house,60,y,40,40);
			ctx.drawImage(tree1,tx1,ty1,tr1,tr1);
		}
		if (!(tx2>=60 && tx2<=100) && !(ty2>=y && ty2<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(left_house,60,y,40,40);
			ctx.drawImage(tree2,tx2,ty2,tr2,tr2);
		}
		if (!(tx3>=60 && tx3<=100) && !(ty3>=y && ty3<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(left_house,60,y,40,40);
			ctx.drawImage(tree1,tx3,ty3,tr3,tr3);
		}
		if (!(tx4>=60 && tx4<=100) && !(ty4>=y && ty4<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(left_house,60,y,40,40);
			ctx.drawImage(tree2,tx4,ty4,tr4,tr4);
		}
		if (!(tx5>=60 && tx5<=100) && !(ty5>=y && ty5<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(left_house,60,y,40,40);
			ctx.drawImage(tree1,tx5,ty5,tr5,tr5);
		}
		if (!(tx6>=60 && tx6<=100) && !(ty6>=y && ty6<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(left_house,60,y,40,40);
			ctx.drawImage(tree1,tx6,ty6,tr6,tr6);
		}
		
		ty1++;
		ty2++;
		ty3++;
		ty4++;
		ty5++;
		ty6++;
		y++;
	}
	else{
		ctx.drawImage(cycle,135,100,30,30);
		ctx.drawImage(news_paper,145,115,10,10);
		ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
		ctx.drawImage(right_house,200,y,40,40);
		if (!(tx1>=200 && tx1<=240) && !(ty1>=y && ty1<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(right_house,200,y,40,40);
			ctx.drawImage(tree1,tx1,ty1,tr1,tr1);
		}
		if (!(tx2>=200 && tx2<=240) && !(ty2>=y && ty2<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(right_house,200,y,40,40);
			ctx.drawImage(tree2,tx2,ty2,tr2,tr2);
		}
		if (!(tx3>=200 && tx3<=240) && !(ty3>=y && ty3<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(right_house,200,y,40,40);
			ctx.drawImage(tree1,tx3,ty3,tr3,tr3);
		}
		if (!(tx4>=200 && tx4<=240) && !(ty4>=y && ty4<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(right_house,200,y,40,40);
			ctx.drawImage(tree2,tx4,ty4,tr4,tr4);
		}
		if (!(tx5>=200 && tx5<=240) && !(ty5>=y && ty5<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(right_house,200,y,40,40);
			ctx.drawImage(tree1,tx5,ty5,tr5,tr5);
		}
		if (!(tx6>=200 && tx6<=240) && !(ty6>=y && ty6<=y+40)){
			ctx.drawImage(grass,0,0,canvas.width/3,canvas.height);
			ctx.drawImage(grass,2*(canvas.width/3),0,canvas.width/3,canvas.height);
			ctx.drawImage(right_house,200,y,40,40);
			ctx.drawImage(tree1,tx6,ty6,tr6,tr6);
		}
		ty1++;
		ty2++;
		ty3++;
		ty4++;
		ty5++;
		ty6++;
		y++;
	}
	if (y>canvas.width/2+100){
		flag=Math.floor(Math.random() * 2);
		y=-50;
		t=-70;
		tx1=Math.floor(Math.random() * (canvas.width/3-40));
		ty1=(-1)*Math.floor(Math.random() * canvas.height);
		tx2=Math.floor(Math.random() * (canvas.width/3-40));
		ty2=(-1)*Math.floor(Math.random() * canvas.height);
		tx3=Math.floor(Math.random() * (canvas.width-210)+210);
		ty3=(-1)*Math.floor(Math.random() * canvas.height);
		tx4=Math.floor(Math.random() * (canvas.width-210)+210);
		ty4=(-1)*Math.floor(Math.random() * canvas.height);
		tx5=Math.floor(Math.random() * (canvas.width/3-40));
		ty5=(-1)*Math.floor(Math.random() * canvas.height);
		tx6=Math.floor(Math.random() * (canvas.width-210)+210);
		ty6=(-1)*Math.floor(Math.random() * canvas.height);
		tr1 = Math.floor(Math.random() * (35-20)+20);
		tr2 = Math.floor(Math.random() * (35-20)+20);
		tr3 = Math.floor(Math.random() * (35-20)+20);
		tr4 = Math.floor(Math.random() * (35-20)+20);
		tr5 = Math.floor(Math.random() * (35-20)+20);
		tr6 = Math.floor(Math.random() * (35-20)+20);
		console.log(tx1,ty1);
		console.log(tx2,ty2);

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
			ctx.drawImage(news_paper,100,115,10,10);
			setTimeout(function(){
				ctx.drawImage(road,canvas.width/3,0,canvas.width/3,canvas.height);
				ctx.drawImage(cycle,135,100,30,30);
			},1000);
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
			ctx.drawImage(news_paper,190,115,10,10);
			setTimeout(function(){
				ctx.drawImage(road,canvas.width/3,0,canvas.width/3,canvas.height);
				ctx.drawImage(cycle,135,100,30,30);
			},1000);
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

