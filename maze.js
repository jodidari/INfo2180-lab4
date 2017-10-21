/*window.onload=function(){
  
  	document.getElementById("boundary1").addEventListener("mouseover",function(){
  		this.className="boundary youlose";
  		});
};*/
	
var end=false; //determines whether a wall has been hit

window.onload=function(){
  
  	var border=document.querySelectorAll("div.boundary");
	document.getElementById("end").addEventListener("mouseover",loser);
  	
  	for (var i=0; i<border.length;i++){
  		border[i].onmouseover=function(){
  				var border=document.querySelectorAll("div.boundary");
  				for (var i=0; i<border.length-1;i++){
  					border[i].className="boundary youlose";
					end=true;
  					};
  			};
  		};
};

function loser()
{
	if(end)
	{
		alert("You lose");
	}
	else
	{
		alert("You win!");
	}
} 	