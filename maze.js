/*window.onload=function(){

	document.getElementById("boundary1").addEventListener("mouseover",function(){
		this.className="boundary youlose";
		});
	};*/
	
var end=false; //determines whether a wall has been hit

window.onload=function(){

	var borders=document.querySelectorAll("div.boundary");
	document.getElementById("start").addEventListener("click",restart);
	document.getElementById("end").addEventListener("mouseover",loser);
	
	for (var i=0; i<borders.length-1;i++){
		borders[i].onmouseover=function(){
				var borders=document.querySelectorAll("div.boundary");
				for (var i=0; i<borders.length-1;i++){
					borders[i].className="boundary youlose";
					end=true;
					loser();
					};
			};
		};
};


function loser()
{
	if(end)
	{
		document.getElementById("status").textContent = "You lose!";
	}
	else
	{
		document.getElementById("status").textContent = "You won!";
	}
}

function restart()
{
	document.getElementById("status").textContent = "Move your mouse over the \"S\" to begin.";
	var borders=document.querySelectorAll("div.boundary");
	for (var i=0;i<borders.length;i++)
	{
		borders[i].classList.remove("youlose");
		end=false;
	}
}