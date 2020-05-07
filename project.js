
// //generate random images
window.onload="getRandomImage";

// function startGame() {
// 	// this.console.log("startgame");
// 	 started = true;
// 	 timerId = setInterval(getRandomImage, 1000);
//  }

function getRandomImage() {
	console.log("random image");
//	var images = [[]"images/Circle.png","images/ovel.jpg","images/rounded-edges.png","images/Square.png"];
	var images =[
	{name:"images/Circle.png",value:1},
	{name:"images/ovel.jpg",value:2},
	{name:"images/rounded-edges.png",value:3},
	{name:"images/Square.png",value:4},
];
	//var image = images[Math.floor(Math.random()*images.length)].name;
	var image = images[Math.floor(Math.random()*images.length)].name;


	console.log(image)
	return image;
	
    }
    function displayRandomImage() {
		var htmlImage = document.getElementById("image");
		htmlImage.src = getRandomImage();
		}
		displayRandomImage();
	
		
		setTimeout(function(){
			//console.log("set time out method called");
			getRandomImage(),
			displayRandomImage()
		
		},150);


   function circle(){
	const value=1;
     var shape=(Math.floor(Math.random()*0.10));
	console.log(value)
	document.getElementById("box").style.borderRadius="100px";

    var top=Math.random()*800;
	var left=Math.random()*1200;
	var right=Math.random()*200;
	var bottom=Math.random()*100;


	document.getElementById("box").style.top=top+"px";
	document.getElementById("box").style.left=left+"px";
	document.getElementById("box").style.right=right+"px";
	document.getElementById("box").style.bottom=bottom+"px";
	// document.getElementById("box").style.direction=ltr+"px";
	document.getElementById("box").style.backgroundColor=getRandomColor();
	document.getElementById("box").style.display="block";
  }


  
  function ovel(){
	const value=2;
     var shape=(Math.floor(Math.random()*0.20));
	console.log(value)
	document.getElementById("box").style.borderRadius="12px";

    var top=Math.random()*800;
	var left=Math.random()*1200;
	var right=Math.random()*200;
	var bottom=Math.random()*100;


	document.getElementById("box").style.top=top+"px";
	document.getElementById("box").style.left=left+"px";
	document.getElementById("box").style.right=right+"px";
	document.getElementById("box").style.bottom=bottom+"px";
	// document.getElementById("box").style.direction=ltr+"px";
	document.getElementById("box").style.backgroundColor=getRandomColor();
	document.getElementById("box").style.display="block";
  }


  
  function roundedge(){
	const value=3;
     var shape=(Math.floor(Math.random()*0.30));
	console.log(value)
	document.getElementById("box").style.borderRadius="70px";

    var top=Math.random()*800;
	var left=Math.random()*1200;
	var right=Math.random()*200;
	var bottom=Math.random()*100;


	document.getElementById("box").style.top=top+"px";
	document.getElementById("box").style.left=left+"px";
	document.getElementById("box").style.right=right+"px";
	document.getElementById("box").style.bottom=bottom+"px";
	// document.getElementById("box").style.direction=ltr+"px";
	document.getElementById("box").style.backgroundColor=getRandomColor();
	document.getElementById("box").style.display="block";
  }

  
  function square(){
	const value=4;
     var shape=(Math.floor(Math.random()*0.50));
	console.log(value)
	document.getElementById("box").style.borderRadius="100px";

    var top=Math.random()*800;
	var left=Math.random()*1200;
	var right=Math.random()*200;
	var bottom=Math.random()*100;


	document.getElementById("box").style.top=top+"px";
	document.getElementById("box").style.left=left+"px";
	document.getElementById("box").style.right=right+"px";
	document.getElementById("box").style.bottom=bottom+"px";
	// document.getElementById("box").style.direction=ltr+"px";
	document.getElementById("box").style.backgroundColor=getRandomColor();
	document.getElementById("box").style.display="block";
  }
	
	setInterval(function(){
		console.log("display");
		circle();
	ovel();
	roundedge();
	square();
	
	},1000);

	document.getElementById("box").onclick= function(){
		circle();
		ovel();
	roundedge();
	square();
	displayRandomImage();
	}

//genrate random color
function getRandomColor() {
	// body...
	var colorIndex="0123456789abcdef".split("");
	// var colorIndex={0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'};
	color="#";
	console.log(colorIndex);
	
	for(var i=0;i<6;i++){
		var index=Math.round(Math.random()*16);
		color += colorIndex[index];
	}//for loop closed
	return color;

}

// if(images.value[i]== value)
// {
// 	console.log("true");
// }
// else
// {
// 	console.log("false");
// }


// function createBox() {
// 	// body...
// 	// var time=Math.random()*800;

// 	if (Math.random()<=0.10){
// 		const value=1;
// 		document.getElementById("box").style.borderRadius="0px";
// 	 }        
		
// 	else if (Math.random()<=0.20){
// 		const value=2;
// 		document.getElementById("box").style.borderRadius="5px";
// 	}


		
// 	else if (Math.random()<=0.50){
// 		const value=3;
// 		document.getElementById("box").style.borderRadius="70px";
// 	}

// 	else{
// 		const value=4;
// 		document.getElementById("box").style.borderRadius="100px";
// 	}//end of else

// 	var top=Math.random()*800;
// 	var left=Math.random()*1200;
// 	var right=Math.random()*200;
// 	var bottom=Math.random()*100;


// 	document.getElementById("box").style.top=top+"px";
// 	document.getElementById("box").style.left=left+"px";
// 	document.getElementById("box").style.right=right+"px";
// 	document.getElementById("box").style.bottom=bottom+"px";
// 	// document.getElementById("box").style.direction=ltr+"px";
// 	document.getElementById("box").style.backgroundColor=getRandomColor();
// 	document.getElementById("box").style.display="block";
// }

	
// 	setTimeout(function(){
// 		console.log("set time out method called");
// 		createBox();
	
// 	},200);

// //timer 	
// var timeleft = 15;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "GAMEOVER";
//   } else {
//     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);

// //onclick on box chnage score and timer 


// let count=0;
// document.getElementById("box").onclick= function(){
	
// //  for(var i=0;i<=timeleft;i++)

// 		createBox();
// 		count+=1;
// 		console.log(count);
// 		document.getElementById("score").innerHTML = "Score :" + count;
		// displayRandomImage();
		
	
	//  if(timeleft==0)
	//  {
	// 	 document.getElementById("button")
	//  }	
// }

	// 	var count=0;
	// count+=1;

		//score
	// 	var count=0;
	//    document.getElementById("score").innerHTML = "Score :" + count;
	//    count++;
				
// }

// function scores() {
	
	
// }

// if(count=0)
// {
// 	 			count += 1;
// 		document.getElementById("score").innerHTML = "Score :" + count;
// }



// document.getElementById("box").onclick= function(){
// 	var count=0;
	
// 		// if(a=createBox() && timeleft!=0)
// 		// {
			
// 			count += 1;
// 			document.getElementById("score").innerHTML = "Score :" + count;
			
// 		// }	
		

// 	}

// function scores{
// var count=0;

// }

// document.getElementById("box").style.display="none";
// clickedTime=Date.now();
// count++;
// refluxTime=clickedTime-createdTime;
// refluxTime=refluxTime/1000;
// document.getElementById("result").innerHTML="RefluxTime :"+refluxTime
// createBox(); //so as to create box again




// else{
// 	alert ("gameover");
// }
//end of onclick functiion




// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
// button.innerHTML = "Click me: " + count;
//  };

    
// r8hu78
// []

// setTimeout(function(){
// 	console.log("set time out method called");
// 	createBox();

// },5000);



//createBox();

//set timer
// 	var timeleft = 30;
// 	var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "GAMEOVER";
//   } else {
//     document.getElementById("countdown").innerHTML = "Timer :"+" "+timeleft + " sec";
//   }
//   timeleft -= 1;
// }, 170



