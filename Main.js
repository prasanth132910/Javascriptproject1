//load the file 
window.onload="getRandomImage";


//generate a function for images 
function getRandomImage() {
    
    var images =[
	{name:"images/Circle.png",value:1},
	{name:"images/ovel.jpg",value:2},
	{name:"images/rounded-edges.png",value:3},
	{name:"images/Square.png",value:4},
];
	
	var image = images[Math.floor(Math.random()*images.length)].name;
    for(var i=1;i<images.length;i++)
    {
        console.log(images[i].value);
        console.log(circle.num)
        if(images[i].value == circle.num){
    
            console.log("matched");
        }
        else
        {
            console.log(" not matched");
        }
       
    }
    
	return image;
 }


 //display images 
    function displayRandomImage() {
		var htmlImage = document.getElementById("image");
		htmlImage.src = getRandomImage();
		}
		displayRandomImage();


 //genrate random color
function getRandomColor() {
	// body...
	var colorIndex="0123456789abcdef".split("");
	// var colorIndex={0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'};
	color="#";
	//console.log(colorIndex);
	
	for(var i=0;i<6;i++){
		var index=Math.round(Math.random()*16);
		color += colorIndex[index];
	}//for loop closed
	return color;

}

function circle(){
 
     document.getElementById("box").style.borderRadius="0px";
     document.getElementById("box").value=1;
     console.log(document.getElementById("box").value);
    }

function ovel(){
       
        document.getElementById("box").value=2;
        document.getElementById("box").style.borderRadius="20px";
        console.log(document.getElementById("box").value);
    }
    
function roundedge(){
   
    document.getElementById("box").style.borderRadius="60px";
    document.getElementById("box").value=3;
    console.log(document.getElementById("box").value);
}
     
function square(){
    
    document.getElementById("box").style.borderRadius="100px";
    document.getElementById("box").value=4;
    console.log(document.getElementById("box").value);
}

 function randomshapes()
 {
     let arrayofFunction=[circle,ovel,roundedge,square];
     var shapes = arrayofFunction[Math.floor(Math.random()*arrayofFunction.length)];
   //  console.log("randomshapes");
     return shapes;

 }
function createBox() {
    // 	// body...
    	if (Math.random()<=0.10){
         document.getElementById("box").style.borderRadius="0px";
    	 }        
            
    	else if (Math.random()<=0.20){
    		document.getElementById("box").style.borderRadius="35px";
        }
           
    	else if (Math.random()<=0.50){
    		document.getElementById("box").style.borderRadius="70px";
    	}
    
    	else{
    		document.getElementById("box").style.borderRadius="100px";
    	}//end of else
    
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
    

// setInterval(function(){
//     // console.log("display");
//     randomshapes();
//     // console.log(images.value);
//     // console.log(circle.value);
//     // if(images.value == circle.value)
//     // {
//     //     console.log("matched");
//     // }
//     // else
//     // {
//     //     console.log(" notmatched matched");
//     // }
//     createBox();
   
// },1500);

// setInterval(function(){
//     // console.log("display");
//     randomshapes();
//     createBox();
    
// },1500);



//onclick function to call the functions
document.getElementById("box").onclick= function(){

    createBox();
    randomshapes();
    displayRandomImage();

}

var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "GAMEOVER";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


	

