/*window.onload=function(){

	document.getElementById("boundary1").addEventListener("mouseover",function(){
		this.className="boundary youlose";
		});
	};*/
	
var end=false; //determines whether a wall has been hit
var cheater=false;

window.onload=function(){

	var borders=document.querySelectorAll("div.boundary");
	document.getElementById("start").addEventListener("click",restart);
	document.getElementById("end").addEventListener("mouseover",loser);
	document.getElementById("maze").addEventListener("mouseleave",cheat);
	
	for (var i=0; i<borders.length-1;i++){
		borders[i].onmouseover=function(){
				var borders=document.querySelectorAll("div.boundary");
				for (var i=0; i<borders.length-1;i++){
					borders[i].className="boundary youlose";
					end=true;
					cheater=false;
					loser();
					}
			};
		}
};


function loser()
{
	if(end)
	{
			document.getElementById("status").textContent = "You lose!";
	}
	else
	{
		document.getElementById("status").textContent = "You won! Move your mouse over the \"S\" to begin.";
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

function cheat(){
	cheater=true;
    document.getElementById("status").textContent = "You Lose, try not try to cheat now, click S to restart";
    var borders=document.querySelectorAll("div.boundary");
    for (var i = 0; i < borders.length; i++) {
        borders[i].removeClassName("youlose");
    }
}
